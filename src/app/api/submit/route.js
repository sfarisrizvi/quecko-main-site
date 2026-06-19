import axios from "axios";
import FormData from "form-data";

export async function POST(request) {
  try {
    const incoming = await request.formData();

    const name = incoming.get("name");
    const email = incoming.get("email");
    const phone = incoming.get("phone");
    const jobTitle = incoming.get("jobTitle");
    const cvFile = incoming.get("cvFile");

    const bitFormData = new FormData();
    bitFormData.append("b2-2", name);
    bitFormData.append("b2-5", email);
    bitFormData.append("b2-7", phone);
    bitFormData.append("b2-8", jobTitle);

    if (cvFile && typeof cvFile.arrayBuffer === "function") {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      bitFormData.append("b2-6", buffer, cvFile.name);
    }

    const response = await axios.post(
      "https://dev.quecko.com/wp-json/bitform/v1/entry/2",
      bitFormData,
      {
        headers: {
          ...bitFormData.getHeaders(),
          "BitForm-API-Key": "59971a5c6213ecbb4e58bf91b4a56962f05311d8",
        },
      }
    );

    return Response.json({ success: true, data: response.data });
  } catch (error) {
    console.error("Submission error:", error.response?.data || error.message);
    return Response.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}
