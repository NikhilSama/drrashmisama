import React from "react";

const TurgonChatWidget = ({ id }: { id: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
    <!-- Embed this line anywhere in your website to add the chatbot -->
    <iframe
      id="TurgonChatBot" src="http://turgon.ai/cschat?id=khaitanpublicschool&endpoint=api/widget&fixedBottomRight=true&leadCapture=true&storeMessageHistory=true" scrolling="yes"
      style=" position: fixed; bottom: 0;right: 0;width: 120px;height: 80px;
        border: 0;background-color: transparent; overflow: scroll;
      "
    ></iframe>

    <script>
      const iframe = document.getElementById("TurgonChatBot");
      window.addEventListener("message", (event) => {
        const type = event.data.type;
        if (type === "resize") {
          iframe.style.height = event.data.h;
          iframe.style.width = event.data.w;
          iframe.style.minHeight = event.data.mh;
          iframe.style.minWidth = event.data.mw;
        }
      });
    </script>
    `,
      }}
    />
  );
};

export default TurgonChatWidget;
