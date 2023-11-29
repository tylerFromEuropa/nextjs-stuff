import { WEB_SITE } from "config";

export default async function Comments({ postSlug }: { postSlug: string }) {
    let comments = [];

    try {
        const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, { next: { revalidate: 5 } });
        // console.log(commentsResult.json());
        const response = await commentsResult.json();
        comments = response.rows;
        // console.log(response.rows);
    } catch (error) {
        console.log(error);
    }

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
            {comments.map((comment: { id: string; content: string; username: string }) => {
                return (
                    <li key={comment.id}>
                        {comment.username}
                        says...
                        <br />
                        {comment.content}
                    </li>
                );
            })}
        </section>
    );
}
