import { ImageResponse } from "next/og";
import { SocialCard } from "./social-card";

export const alt = "Stephan Claxton: Systems engineering for AI and autonomy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <SocialCard
      eyebrow="Systems engineering / product / autonomy"
      title={["Systems thinking,", "applied to AI", "and autonomy"]}
      statement="Architecture for software that has to be right."
      signal="SE"
    />,
    size,
  );
}
