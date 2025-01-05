type ArticleBodySectionProps = {
  article: any;
};

export default function ArticleBodySection({
  article,
}: ArticleBodySectionProps) {
  return (
    <div className="w-full flex flex-col justify-center items-start py-2 space-y-4 px-40 mb-10">
      <h2 className="font-bold  text-4xl" style={{ color: "#172B4D" }}>
        {article.title}
      </h2>
      <p className="text-xl text-gray-600">
        By {article.authorName} - {article.timeToRead} read
      </p>
      <img
        className="rounded-md h-96 w-full container my-4 bg-slate-900"
        src={article.coverImage}
        width={400}
        height={200}
        alt="article image"
      />
      <p className="text-xl text-gray-600">{article.content}</p>
      <div className="m-4 text-slate-900 w-full">
        <hr className="bg-slate-900 h-0.5" />
      </div>
      <div className="mt-4 mb-8 flex flex-row space-x-4 justify-center items-center">
        <img
          className="block rounded-full mx-auto h-20 w-20 object-cover"
          src={article.authorImage}
          width={200}
          height={200}
          alt="user image"
        />
        <div className="flex flex-col h-full justify-evenly">
          <h1 className="font-bold text-xl" style={{ color: "#172B4D" }}>
            {article.authorName}
          </h1>
          <h5 className="text-x text-center" style={{ color: "#172B4D" }}>
            {article.authorJobTitle}
          </h5>
        </div>
      </div>
    </div>
  );
}
