import { ImageResponse } from "next/og";
import { SocialCard } from "../../social-card";

export const alt = "Design intent has to move at AI speed";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <SocialCard
      eyebrow="Product leadership / AI / systems"
      title={["Design intent", "has to move", "at AI speed"]}
      statement="“Speed hides mistakes.”"
      signal="AI"
    />,
    size,
  );
}
