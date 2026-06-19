import streamlit as st
import google.generativeai as genai
from PIL import Image

# Page setup
st.set_page_config(
    page_title="Kisan Mitra AI",
    page_icon="🌱",
    layout="centered",
)

import os

# Gemini API setup — set GEMINI_API_KEY in your environment before running
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

model = genai.GenerativeModel("gemini-2.5-flash")

# UI
st.title("🌱 Kisan Mitra AI")
st.caption("AI-Powered Natural Farming Consultant for Indian Farmers")

feature = st.selectbox(
    "Choose Service",
    [
        "Disease Identification",
        "Natural Farming Education",
    ],
    key="service_selector",
)

question = st.text_area(
    "Describe your crop problem or ask a farming question"
)
uploaded_file = st.file_uploader(
    "📷 Upload Crop Image",
    type=["jpg", "jpeg", "png"]
)
if uploaded_file:
    st.image(
        uploaded_file,
        caption="Uploaded Crop Image",
        use_container_width=True
    )

# AI Response
if st.button("Get Advice"):
    if not question.strip():
        st.warning("Please enter a question.")
        st.stop()

    if feature == "Disease Identification":
        prompt = f"""
You are an agricultural expert.

Answer in simple Hinglish.

Maximum 120 words.

Recommend only organic remedies.

Never recommend chemical pesticides.

Farmer Problem:
{question}
"""
    else:
        prompt = f"""
You are a natural farming educator.

Explain in simple Hinglish.

Give practical examples.

Keep answer under 120 words.

Topic:
{question}
"""

    with st.spinner("Generating advice..."):
        response = model.generate_content(prompt)

    st.subheader("🌾 AI Advice")
    st.write(response.text)