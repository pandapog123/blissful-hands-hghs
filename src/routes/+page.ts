import type { PageLoad } from "./$types";

export const prerender = true;

export const load = (() => {
  return {
    description:
      "Helping students manage stress and connect with others through acts of service. At Blissful Hands, we create a welcoming environment where everyone feels cared for and supported, and every action is guided by the needs of our community.",
  };
}) satisfies PageLoad;
