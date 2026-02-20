import { ImageResponse } from "next/og";

export const alt = "Harsh's Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        padding: "44px",
        background: "#050505",
        color: "#fafafa",
        fontFamily: "Geist, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #050505 0%, #0b0b0b 55%, #121212 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(760px 440px at -6% -18%, rgba(56, 189, 248, 0.34), transparent 60%), radial-gradient(720px 460px at 108% 118%, rgba(16, 185, 129, 0.3), transparent 61%), radial-gradient(560px 330px at 86% 2%, rgba(249, 115, 22, 0.2), transparent 57%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.24,
          background:
            "repeating-linear-gradient(106deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 22px)",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          borderRadius: "24px",
          padding: "1px",
          background:
            "linear-gradient(128deg, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.07) 30%, rgba(56, 189, 248, 0.44) 60%, rgba(16, 185, 129, 0.34) 86%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "23px",
            background: "rgba(6, 6, 6, 0.84)",
            padding: "46px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "24px",
              letterSpacing: "0.06em",
              color: "#a3a3a3",
            }}
          >
            <div style={{ display: "flex", textTransform: "uppercase" }}>
              harshmpatil.xyz
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "999px",
                border: "1px solid rgba(56, 189, 248, 0.55)",
                background:
                  "linear-gradient(90deg, rgba(56, 189, 248, 0.2), rgba(16, 185, 129, 0.18))",
                padding: "8px 14px",
                fontSize: "18px",
                color: "#ecfeff",
                letterSpacing: "0.01em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "10px",
                  height: "10px",
                  borderRadius: "999px",
                  background: "#34d399",
                }}
              />
              Available for roles
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "64px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "rgba(244, 244, 245, 0.75)",
              }}
            >
              Harshwardhan Patil
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "34px",
                color: "rgba(244, 244, 245, 0.55)",
                lineHeight: 1.1,
              }}
            >
              Full Stack Developer | AI Engineer
            </div>
            <div
              style={{
                display: "flex",
                width: "430px",
                height: "6px",
                borderRadius: "999px",
                background: "rgba(244, 244, 245, 0.35)",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontSize: "24px",
                color: "#d4d4d8",
              }}
            >
              <div
                style={{
                  display: "flex",
                  border: "1px solid #3f3f46",
                  borderRadius: "999px",
                  padding: "8px 16px",
                  background:
                    "linear-gradient(90deg, rgba(56, 189, 248, 0.14), rgba(16, 185, 129, 0.1))",
                }}
              >
                @patilharshm
              </div>
              <div style={{ display: "flex" }}>Swiggy, Bengaluru, India</div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                color: "#a1a1aa",
              }}
            >
              Building useful things with web + AI
            </div>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
