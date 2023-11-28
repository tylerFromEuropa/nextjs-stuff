export default async function Comments({ postSlug }: { postSlug: string }) {
    return (
        <section>
            <h2>| Comments |</h2>
            <h3>Leave a comment: </h3>

            <form action={`/api/comments/${postSlug}`} method="POST">
                <label htmlFor="username">Name:</label>
                <input type="text" name="username" className="text-neutral-900" />

                <label htmlFor="comment">Comment:</label>
                <textarea name="comment" cols={30} rows={10} className="text-neutral-900" />

                <button type="submit">Send comment</button>
            </form>
        </section>
    );
}
