import { DateComponent } from "@/components/date";

const links = [
  {
    header: "frequent",
    items: [
      { title: "github", url: "https://github.com" },
      { title: "graphite", url: "https://graphite.com" },
      { title: "linear", url: "https://linear.app/affiniti" },
      { title: "gmail", url: "https://mail.google.com" },
      { title: "meet", url: "https://meet.google.com" },
    ],
  },
  {
    header: "work",
    items: [
      {
        title: "monorepo",
        url: "https://github.com/affiniti-finance/monorepo",
      },
      {
        title: "legacy",
        url: "https://github.com/affiniti-finance/affiniti",
      },
      {
        title: "staging",
        url: "https://staging.affiniti.finance/dashboard",
      },
      {
        title: "prod",
        url: "https://update.affiniti.com/dashboard",
      },
      {
        title: "internal",
        url: "https://internal.affiniti.finance",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-white border border-neutral-400 rounded-lg p-7 flex flex-col gap-4">
        <DateComponent />
        <div className="flex justify-center items-start gap-10">
          {links.map((section) => (
            <div key={section.header} className="flex flex-col">
              <div className="underline">{section.header}</div>
              {section.items.map((item) => (
                <a
                  className="hover:text-neutral-300 transition-all"
                  target="_top"
                  key={item.title}
                  href={item.url}
                >
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
