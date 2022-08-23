const getSession = async ({ locals }) => {
  return {
    posts: locals.posts
  };
};
const handle = async ({ event, resolve }) => {
  const posts = await Promise.all(Object.entries(Object.assign({ "/src/routes/blog/hello-world.md": () => import("../../../entries/pages/blog/hello-world.md.js"), "/src/routes/blog/svelte-inkjs.md": () => import("../../../entries/pages/blog/svelte-inkjs.md.js"), "/src/routes/blog/svelte-observers.md": () => import("../../../entries/pages/blog/svelte-observers.md.js"), "/src/routes/blog/use-mdsvex.md": () => import("../../../entries/pages/blog/use-mdsvex.md.js") })).map(async ([path, page]) => {
    const { metadata } = await page();
    const filename = path.split("/").pop();
    return {
      ...metadata,
      filename
    };
  }));
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  event.locals.posts = posts;
  return resolve(event);
};
export {
  getSession,
  handle
};
