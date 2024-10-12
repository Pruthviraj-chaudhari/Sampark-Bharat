import { Tabs } from "../ui/tabs";

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Politics",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white">
          <DummyContent imageUrl="politics.png" />
        </div>
      ),
    },
    {
      title: "Organization",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white">
          <DummyContent imageUrl="org1.png" />
        </div>
      ),
    },
    {
      title: "Business",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white">
          <DummyContent imageUrl="businessman.jpg" />
        </div>
      ),
    },
    {
      title: "Construction",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white">
          <DummyContent imageUrl="construction.jpg" />
        </div>
      ),
    },
    {
      title: "CA",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white">
          <DummyContent imageUrl="CAtheme.jpg" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({imageUrl} : {imageUrl:string}) => {
  return (
    <img
      src={imageUrl}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
