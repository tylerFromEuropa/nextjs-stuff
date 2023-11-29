import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

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
            <CommentForm postSlug="postSlug" />
            <ul>
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
            </ul>
        </section>
    );
}
