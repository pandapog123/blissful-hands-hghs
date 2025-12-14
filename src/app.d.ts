// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      ui: {
        showHeader?: boolean;
        safeHeader?: boolean;
        showFooter?: boolean;
      };
      title?: string;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
