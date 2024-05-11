import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        bhy01dev
      </h1>
      <p className="mb-4">
        {`My curiosity in learning and discovering technology drives me to continuous improvement. I am compatible with team work, I am strong at solving problems and I can express myself easily in communication. Making a disciplined effort to achieve my goals and always seeing clear results of new loves.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
