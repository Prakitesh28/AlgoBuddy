import ArticleActions from "@/app/components/ui/ArticleActions";
import ExploreOther from "@/app/components/ui/exploreOther";
import VisualizerPageLayout, {
  createVisualizerPaths,
} from "@/app/visualizer/components/VisualizerPageLayout";
import { getGraphRelatedLinks } from "@/app/visualizer/graph/data";

export default function GraphTopicPage({ topic, Animation, startNode }) {
  const paths = [
    { name: "Home", href: "/" },
    { name: "Visualizer", href: "/visualizer" },
    { name: topic.title, href: "" },
  ];

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_320px]">
      <article className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm dark:border-[#222] dark:bg-[#111]">
        <section className="border-b border-[#f3f4f6] p-6 dark:border-[#1e1e1e]">
          <h2
            className="mb-4 flex items-center text-2xl font-black text-[#1a1a1a] dark:text-white"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}
          >
            <span className="mr-3 h-6 w-1 rounded-full bg-[#a435f0]"></span>
            Core idea
          </h2>
          <div className="space-y-3">
            {topic.summary.map((item) => (
              <p
                key={item}
                className="leading-relaxed text-[#374151] dark:text-[#d1d5db]"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="container-app">
          <Animation startNode={startNode} />
        </section>
      </article>

      <aside className="h-fit rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm dark:border-[#222] dark:bg-[#111]">
        <h2
          className="mb-4 flex items-center text-2xl font-black text-[#1a1a1a] dark:text-white"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}
        >
          <span className="mr-3 h-6 w-1 rounded-full bg-[#a435f0]"></span>
          Complexity
        </h2>
        <div className="space-y-3">
          {topic.complexity.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg bg-[#f9fafb] px-3 py-2 text-sm dark:bg-[#181818]"
            >
              <span className="text-[#6b7280] dark:text-[#9ca3af]">
                {item.label}
              </span>
              <span className="font-semibold text-[#1a1a1a] dark:text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default function GraphTopicPage({ topic, Animation }) {
  return (
    <VisualizerPageLayout
      paths={createVisualizerPaths("Graph", topic.title)}
      title={topic.title}
      headerDescription={topic.description}
      headerActions={<ArticleActions />}
      animation={<Animation />}
      content={<GraphTopicDetails topic={topic} />}
      exploreOther={
        <ExploreOther
          title="Explore graph topics"
          columns="4"
          links={getGraphRelatedLinks(topic.key)}
        />
      }
    />
  );
}
