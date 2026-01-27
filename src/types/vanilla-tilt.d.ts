declare module "vanilla-tilt" {
  type VanillaTiltOptions = Record<string, unknown>;

  interface VanillaTiltStatic {
    init(
      elements: Element | Element[] | NodeListOf<Element>,
      options?: VanillaTiltOptions
    ): void;
  }

  const VanillaTilt: VanillaTiltStatic;
  export default VanillaTilt;
}
