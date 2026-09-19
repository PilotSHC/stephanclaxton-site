type SocialCardProps = {
  eyebrow: string;
  title: string[];
  statement: string;
  signal: string;
};

export function SocialCard({
  eyebrow,
  title,
  statement,
  signal,
}: SocialCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#f4f1ea",
        color: "#1a1a1a",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "24px",
          border: "2px solid #1a1a1a",
          display: "flex",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "310px",
          height: "630px",
          display: "flex",
          overflow: "hidden",
          background: "#8b3a1f",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "150px",
            width: "14px",
            height: "820px",
            display: "flex",
            background: "#f4f1ea",
            opacity: 0.85,
            transform: "rotate(24deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "102px",
            width: "4px",
            height: "820px",
            display: "flex",
            background: "#f4f1ea",
            opacity: 0.6,
            transform: "rotate(24deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "42px",
            bottom: "48px",
            display: "flex",
            color: "#f4f1ea",
            fontFamily: "Arial, sans-serif",
            fontSize: "104px",
            fontWeight: 800,
            letterSpacing: "-0.08em",
            lineHeight: 0.9,
          }}
        >
          {signal}
        </div>
      </div>

      <div
        style={{
          width: "890px",
          height: "100%",
          padding: "66px 64px 54px 72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#8b3a1f",
              fontFamily: "Arial, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "3px",
                marginRight: "16px",
                display: "flex",
                background: "#8b3a1f",
              }}
            />
            {eyebrow}
          </div>

          <div
            style={{
              marginTop: "34px",
              display: "flex",
              flexDirection: "column",
              fontSize: "70px",
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 1.02,
            }}
          >
            {title.map((line) => (
              <div key={line} style={{ display: "flex" }}>
                {line}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontStyle: "italic",
              color: "#4a4a4a",
            }}
          >
            {statement}
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              color: "#1a1a1a",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Stephan Claxton&nbsp;&nbsp;·&nbsp;&nbsp;stephanclaxton.com
          </div>
        </div>
      </div>
    </div>
  );
}
