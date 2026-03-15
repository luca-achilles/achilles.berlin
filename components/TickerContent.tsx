const quotes = [
    "my name is luca, i live on the second floor",
    "i'm the moment between the strikin' and the fire",
    "you know i need you here",
    "i been feeling it since 1966 now",
    "they're talking about you, boy",
];

export default function TickerContent() {
    return (
        <div className={"flex w-screen"}>
            {[...new Array(3).keys()].map((key =>
                    <div key={key} className={"animate-ticker flex justify-between items-center gap-x-5 text-base font-medium text-nowrap"}>
                        {[...new Array(quotes.length * 2).keys()].map(((key, i) => {
                            if (i % 2 === 0) {
                                return <p key={key} className="uppercase">{quotes[i / 2]}</p>;
                            }

                            return <div key={key} className={"w-4 h-0.5 rounded-full bg-white dark:bg-black"} />;
                        }))}
                        <div />
                    </div>
            ))}
        </div>
    );
}