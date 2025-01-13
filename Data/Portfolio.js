// Filters
const filter_web = "filter-web";
const filter_app = "filter-app";
const filter_ai = "filter-ai";

const filters = [filter_web, filter_app, filter_ai];

const generateFilterString = (...fils) => {
  return Array.from(fils).join(" ");
};

// URL Types
const git = "Github";

// Category Types
const cat_types = {
  [filter_web]: "Web",
  [filter_app]: "Android",
  [filter_ai]: "AI",
};

// Projects
const projects = [
  {
    name: "DreamSound Studio",
    filter: generateFilterString(filter_web, filter_ai),
    img: "Projects",
    desc: [
      "A Gradio tool that can generate interesting audios with the help of Neural Style Transfer and Google's DeepDream concept",
      "Uses TensorFlow, InceptionV3, Librosa and Gradio",
    ],
    urls: [[[git], "https://github.com/UdayG01/DreamSound-Studio"]],
  },
  {
    name: "Mockinterview",
    filter: generateFilterString(filter_app, filter_ai),
    img: "mockinterview",
    desc: [
      "MockBit, the cutting-edge website that aims to revolutionize the interview preparation experience for students and professionals alike. Our project is built on the foundation of Artificial Intelligence (AI), specifically integrating Large Language Models (LLM) fine-tuned with a carefully curated dataset. The result is a platform that offers a contextualized and effective mock interview experience",
      "Uses QloRa for Llama2 fine-tuning, NextJS for UI",
    ],
    urls: [[[git], "https://github.com/UdayG01/mockinterview-saas"]],
  },
  {
    name: "BookPalLlama2",
    filter: generateFilterString(filter_ai),
    img: "bookpalllama2",
    desc: [
      "Imagine being able to have a conversation with your favorite book, delving into the author's thought processes, and gaining a deeper understanding of the literary work. Our LLaMA2 RAG Application makes this possible, leveraging the power of LLaMA2 Large Language Model (LLM) and Langchain to provide a seamless and immersive interaction with eBooks.",
    ],
    urls: [[[git], "https://github.com/UdayG01/Book-Pal-Llama2"]],
  },
  {
    name: "Phishing Detection",
    filter: generateFilterString(filter_app, filter_ai),
    img: "phishing",
    desc: [
      "an NLP app that uses Google's BERT in order to detect phishing attempts through URLs",
    ],
    urls: [[[git], "https://github.com/UdayG01/url-phishing-detection"]],
  },
  {
    name: "Sentiment Analysis",
    filter: generateFilterString(filter_ai),
    img: "sentiment_analysis",
    desc: [
      "An NLP based repo that studies different methods of sentiment analysis, lexicon-based, aspect-based, and the SOTA machine learning methods",
    ],
    urls: [[[git], "https://github.com/UdayG01/Sentiment-Analysis-NLP"]],
  },
  {
    name: "Memes Generator",
    filter: generateFilterString(filter_web),
    img: "meme_generator",
    desc: [
      "A ReactJS app utilizing react hooks and APIs to enable a user to get trending meme images from the web and add captions in order to create customized memes",
    ],
    urls: [[[git], "https://github.com/UdayG01/Memes-app-scrimba-react"]],
  },
  {
    name: "Products OCR",
    filter: generateFilterString(filter_ai),
    img: "products_ocr",
    desc: [
      "A tool developed for Amazon's Hackathon that uses techniques like Object-Detection, bounding box algorithms to highlight different numerical information on products and then uses OCR techniques to analyze and store them. Uses TensorFlow, OpenCV",
    ],
    urls: [[[git], "https://github.com/UdayG01/Amazon-OCR"]],
  },
  {
    name: "Tumor Detection",
    filter: generateFilterString(filter_ai),
    img: "tumor_detection",
    desc: [
      "A tool that compares custom CNNs, pre-trained VGG19, ResNet50 for brain tumor detection",
    ],
    urls: [[[git], "https://github.com/UdayG01/Brain-Tumor-Detection"]],
  },
  {
    name: "LooksAI",
    filter: generateFilterString(filter_ai),
    img: "looksai",
    desc: [
      "A Gradio tool that uses Multi-Modal LLMs (Gemini 1.5) to understand user's fashion choices and images, and make recommendations.",
    ],
    urls: [[[git], "https://github.com/UdayG01/looks.ai"]],
  },
];

// Get Details
const getDetails = (id) => {
  if (!id || id < 0 || id >= projects.length) return projects[0];

  const pr = projects[id];
  let fils_ = pr.filter.split(" ");
  let cats_ = [];
  fils_.forEach((el) => {
    cats_ = [...cats_, cat_types[el]];
  });
  let cat = cats_.join(", ");
  pr["category"] = cat;

  return pr;
};

export default { filters, projects, getDetails };
