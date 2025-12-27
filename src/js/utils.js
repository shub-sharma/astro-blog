export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        timeZone: "UTC",
    });
}

// empty optional object
export function formatBlogPosts(
    posts,
    {
        filterOutDrafts = true,
        sortByDate = true,
        limit = undefined,
        filterOutFuturePosts = true,
    } = {}
) {
    const filteredPosts = posts.reduce((acc, post) => {
        const { date, draft } = post.frontmatter;
        // filteredOutDrafts is true

        if (filterOutDrafts && draft) {
            return acc;
        }

        //filteredOutFuturePosts is true
        if (filterOutFuturePosts && new Date(date) > new Date()) {
            return acc;
        }

        acc.push(post);
        return acc;
    }, []);

    if (sortByDate) {
        filteredPosts.sort(
            (a, b) =>
                new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    } else {
        filteredPosts.sort(() => Math.random() - 0.5);
    }

    // limit if number is passed in
    if (typeof limit === "number") {
        return filteredPosts.slice(0, limit);
    }

    return filteredPosts;
}
