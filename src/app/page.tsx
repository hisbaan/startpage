import { DateComponent } from "@/components/date";

const links = [
  {
    header: "frequent",
    items: [
      { title: "github", url: "https://github.com" },
      { title: "gitlab", url: "https://gitlab.com" },
      { title: "gmail", url: "https://mail.google.com" },
      { title: "meet", url: "https://meet.google.com" },
      { title: "youtube", url: "https://youtube.com" },
    ],
  },
  {
    header: "work",
    items: [
      {
        title: "jira",
        url: "https://cocoflo.atlassian.net/jira/software/c/projects/DEV/boards/8",
      },
      { title: "confluence", url: "https://cocoflo.atlassian.net/wiki" },
      {
        title: "review",
        url: "https://gitlab.com/groups/cocoflo-dev/-/merge_requests",
      },
      {
        title: "cocoflo-api",
        url: "https://gitlab.com/cocoflo-dev/cocoflo-api/-/merge_requests",
      },
      {
        title: "webclient",
        url: "https://gitlab.com/cocoflo-dev/webclient/-/merge_requests",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-white border border-neutral-400 rounded-lg p-7 flex flex-col gap-4">
        <DateComponent />
        <div className="flex justify-center items-center gap-10">
          {links.map((section) => (
            <div key={section.header} className="flex flex-col">
              <div className="underline">{section.header}</div>
              {section.items.map((item) => (
                <a className="hover:text-neutral-300 transition-all" target="_top" key={item.title} href={item.url}>
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
