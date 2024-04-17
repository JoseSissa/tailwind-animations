import { generatePluginCss } from "./utils.js";
import { describe, it, expect } from "vitest";

describe("tailwindcss-animations plugins", () => {
  it("use a predefined animation", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-zoom-in">Hello</div>',
    });

    console.log(css)

    expect(css).toMatch(
      "@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out}"
    );
  });
});
