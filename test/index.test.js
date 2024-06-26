import { generatePluginCss } from "./utils.js";
import { describe, it, expect } from "vitest";

describe("tailwindcss-animations plugins", () => {
  // Verifica que el css se está generando correctamente
  it("use a predefined animation", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-zoom-in">Hello</div>',
    });

    expect(css).toMatch(
      "@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out both}"
    );
  });

  // Verifica que la propiedad del delay de forma dinámica funcione correctaamente
  it("use a predefined animation delay", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-delay-100">Hello</div>',
    });

    expect(css).toMatch(".animate-delay-100{animation-delay:100ms}");
  });

  it("use a custom animation delay", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-delay-[777ms]">Hello</div>',
    });

    expect(css).toMatch(".animate-delay-\\[777ms\\]{animation-delay:777ms}");
  });

  // Verifica que la propiedad de la duración de forma dinámica funcione correctaamente
  it("use a predefined animation duration", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-duration-100">Hello</div>',
    });

    expect(css).toMatch(".animate-duration-100{animation-duration:100ms}");
  });

  it("use a custom animation duration", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-duration-[123ms]">Hello</div>',
    });

    expect(css).toMatch(
      ".animate-duration-\\[123ms\\]{animation-duration:123ms}"
    );
  });

  it("use a timing function animation", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-linear">Hello</div>',
    });

    expect(css).toMatch(".animate-linear{animation-timing-function:linear}");
  });

  it("use a fill mode animation", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-fill-mode-forwards">Hello</div>',
    });

    expect(css).toMatch(
      ".animate-fill-mode-forwards{animation-fill-mode:forwards}"
    );
  });

  it("use a custom animation iteration count", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-iteration-count-twice">Hello</div>',
    });

    expect(css).toMatch(
      ".animate-iteration-count-twice{animation-iteration-count:2}"
    );
  });

  it("use a custom animation iteration count with an arbitrary value", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-iteration-count-[10]">Hello</div>',
    });

    expect(css).toMatch(
      ".animate-iteration-count-\\[10\\]{animation-iteration-count:10}"
    );
  });

  it("use a play state animation play", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-play-paused">Hello</div>',
    });

    expect(css).toMatch(".animate-play-paused{animation-play-state:paused}");
  });

  it("use not custom animation steps", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-steps-retro">Hello</div>',
    });

    expect(css).toMatch(
      ".animate-steps-retro{animation-timing-function:steps(8)}"
    );
  });

  it("use a custom animation steps", async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-steps-[33]">Hello</div>',
    });

    expect(css).toMatch(
      ".animate-steps-\\[33\\]{animation-timing-function:steps(33)}"
    );
  });

  it('use a bezier curve as a timing function animation', async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-bezier-sine-in">Hello</div>'
    })

    expect(css).toMatch('.animate-bezier-sine-in{animation-timing-function:cubic-bezier(0.12,0,0.39,0)}')
  })

  it('use a custom bezier curve as a timing function animation', async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-bezier-[cubic-bezier(0,0,0,0)]">Hello</div>'
    })

    expect(css).toMatch(
      '.animate-bezier-\\[cubic-bezier\\(0\\2c 0\\2c 0\\2c 0\\)\\]{animation-timing-function:cubic-bezier(0,0,0,0)}'
    )
  })
});
