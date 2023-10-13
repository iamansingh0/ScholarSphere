import React, { useState, useEffect } from "react";
import {
  copy,
  loader,
  tick,
  defaultImage,
  curious,
  download,
  search,
} from "../assets";
import { useGetFactsMutation } from "../services/facts";
import toast from "react-hot-toast";
import { SideCol } from "./SideCol";

const huggingFaceToken = import.meta.env.VITE_HUGGING_FACE_TOKEN;

const Output = () => {
  const [fact, setFact] = useState({
    prompt: "",
    facts: [],
    image: null,
  });
  const [allFacts, setAllFacts] = useState([]);
  const [copied, setCopied] = useState("");
  const [getFacts, { error, isLoading }] = useGetFactsMutation();
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(null);

  useEffect(() => {
    const factsFromLocalStorage = JSON.parse(localStorage.getItem("myfacts"));

    if (factsFromLocalStorage) {
      setAllFacts(factsFromLocalStorage);
    }
  }, []);

  const generateImage = async (data) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        headers: {
          Authorization: `Bearer ${huggingFaceToken}`,
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getFacts({
      messages: [
        {
          role: "user",
          content: `Give 5 interesting / fascinating / mind blowing / fun facts about ${fact.prompt} [max 100 words]. Please give an array of facts in this format strictly: ["...", "...", "...", "...", "..."]`,
        },
      ],
    });

    setImageLoading(true);
    try {
      const response = await generateImage({ inputs: fact.prompt });
      const imageBase64 = await blobToBase64(response);

      if (data?.choices[0]?.message && response) {
        const newFact = {
          ...fact,
          facts: JSON.parse(data.choices[0].message.content),
          image: imageBase64,
        };
        const updatedAllFacts = [newFact, ...allFacts];

        setFact(newFact);
        setImageLoading(false);
        setAllFacts(updatedAllFacts);
        localStorage.setItem("myfacts", JSON.stringify(updatedAllFacts));
      }
    } catch (error) {
      setImageError(error);
    }
  };

  const handleCopy = (copyFacts) => {
    setCopied(copyFacts);
    navigator.clipboard.writeText(copyFacts);
    toast.success("Copied facts successfully!");
    setTimeout(() => setCopied(""), 3000);
  };

  const downloadImage = async (image, prompt) => {
    try {
      const link = document.createElement("a");
      link.href = `data:image/png;base64,${image}`;
      link.download = prompt;
      link.click();
      toast.success("Image downloaded successfully!");
    } catch (error) {
      toast.error("Error. Oops, that's unexpected!");
    }
  };

  return (
    <div className="flex w-full justify-between mb-[40vh]">
      <SideCol side="left" />
      <section
      id="visualizer"
      className="mt-16 md:max-w-xl max-w-md md:w-[576px] w-full -mt-[5vh]"
    >
      <div>
          <h1 className="head_text">
            Crafting Knowledge with
            <br className="max-md:hidden" />
            <span className="orange_gradient">&nbsp;Visuals</span>
          </h1>
          <h2 className="desc">
            Enter a topic or keyword that piques your curiosity, and we'll uncover
            fascinating facts and a captivating image to expand your knowledge and
            entertain your imagination!
          </h2>
        </div>
      <div className="flex flex-col w-full gap-2 mt-[10vh]">
        <form
          className="relative flex justify-center items-center w-full"
          onSubmit={handleSubmit}
        >
          <img
            src={curious}
            alt="Curious Icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            placeholder="Try searching for The Milky Way!"
            value={fact.prompt}
            onChange={(e) => {
              setFact({ ...fact, prompt: e.target.value });
            }}
            required
            className="prompt_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <img
              src={search}
              alt="Search Icon"
              className="absolute left-0 my-2 mx-2 w-5"
            />
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allFacts.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setFact(item)}
              className="prompt_card font-satoshi text-sm"
            >
              <div className="flex gap-3 items-center">
                <div key={index} className="image_card">
                  <img
                    src={`data:image/png;base64,${item.image}`}
                    alt={item.prompt}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div
                  className="copy_btn"
                  onClick={() => downloadImage(item.image, item.prompt)}
                >
                  <img
                    src={download}
                    alt="Download Icon"
                    className="w-[50%] h-[50%] object-contain"
                  />
                </div>
                <span className="font-semibold">Facts:</span>{" "}
                {`${item.facts[0].substring(0, 50)}...`}
              </div>
              <div className="copy_btn" onClick={() => handleCopy(item.facts)}>
                <img
                  src={copied === item.facts ? tick : copy}
                  alt="Copy Icon"
                  className="w-[50%] h-[50%] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        <div className="flex flex-col gap-3 w-full">
          <h2 className="font-satoshi font-bold text-gray-600 text-xl">
            {allFacts.length == 0 || fact.facts.length == 0
              ? "Let's craft your very first masterpiece!"
              : "Presenting you fascinating facts and captivating visuals!"}
            <span className="blue_gradient"></span>
          </h2>
          <div className="result_box">
            {isLoading || imageLoading ? (
              <div className="w-full aspect-square flex justify-center items-center">
                <img
                  src={loader}
                  alt="Loader"
                  className="w-20 h-20 object-contain"
                />
              </div>
            ) : error || imageError ? (
              <div className="w-full aspect-square flex justify-center items-center">
                <p className="font-inter font-bold text-black text-center">
                  Oops, that's unexpected! Give it another shot, and let's see
                  if the digital dice roll in your favor this time!
                </p>
              </div>
            ) : (
              <div>
                <ol className="list-decimal ml-[25px]">
                  {fact.facts?.map((item, index) => (
                    <li key={index} className="mb-2 font-satoshi">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      {!item.endsWith(".") && "."}
                    </li>
                  ))}
                </ol>
                <img
                  src={
                    fact.facts?.length
                      ? `data:image/png;base64,${fact.image}`
                      : defaultImage
                  }
                  alt={fact.prompt}
                  className={`${
                    fact.facts?.length ? "mt-[24px]" : ""
                  } w-full aspect-square rounded-md object-cover`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    <SideCol side="right" />
    </div>
  );
};

export { Output };
