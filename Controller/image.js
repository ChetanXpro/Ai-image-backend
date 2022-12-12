const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  try {
    const { text = "", size = "medium" } = req.body;

    const imageSize =
      size === "small"
        ? "256x256"
        : size === "medium"
        ? "512x512"
        : "1024x1024";
    const response = await openai.createImage({
      prompt: text,
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: "Image could not be generated",
    });
  }
};

module.exports = generateImage;
