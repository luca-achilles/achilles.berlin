import IconDark from "@/components/IconDark";
import ScrollDownIndicator from "@/components/ScrollDownIndicator";
import MailLink from "@/components/MailLink";

const texts = [
    "my name is luca, i live on the second floor",
    "i'm the moment between the strikin' and the fire",
    "you know i need you here",
    "i been feeling it since 1966 now",
    "they're talking about you, boy",
];

export default function Page() {
    return (
        <div className={"flex flex-col items-center bg-white text-black dark:bg-black dark:text-white selection:bg-primary font-poppins overflow-x-clip"}>
            <div className={"h-6 w-screen bg-black text-white dark:bg-white dark:text-black cursor-pointer select-none"}>
                <div className={"flex w-screen"}>
                    {[...new Array(3).keys()].map((key =>
                        <div key={key} className={"animate-ticker flex justify-between items-center gap-x-5 text-base font-medium text-nowrap"}>
                            {[...new Array(texts.length * 2).keys()].map(((key, i) => {
                                if (i % 2 === 0) {
                                    return <p key={key} className="uppercase">{texts[i / 2]}</p>;
                                }

                                return <div key={key} className={"w-4 h-0.5 rounded-full bg-white dark:bg-black"} />;
                            }))}
                            <div />
                        </div>
                    ))}
                </div>
            </div>

            <div className={'grid w-svw h-svh min-h-100 pb-10'}>
                <div className={"flex flex-col self-center col-start-1 row-start-1 items-center gap-y-12"}>
                    <IconDark className={"size-30"} />
                    <p className={"text-6xl font-semibold"}>achilles.berlin</p>
                </div>
                <div className={"self-end justify-self-center col-start-1 row-start-1"}>
                    <ScrollDownIndicator />
                </div>
            </div>

            <div className={"flex flex-col items-center w-screen py-30"}>
                <div className={"flex flex-col items-center gap-y-2"}>
                    <p className={"text-3xl"}>Send me a mail:</p>
                    <MailLink />
                </div>
                <svg className={"w-full self-start pr-[10%] text-black dark:text-white"} viewBox="0 0 1720 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 272.585C0 272.585 207.5 367.586 478.5 241.586C749.5 115.586 990.769 279.645 1222 349.586C1465 423.086 1626 118.586 1626 118.586" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="24 32"/>
                    <path d="M1681.26 110.622C1681.58 111.044 1682.02 111.357 1682.53 111.519C1683.04 111.681 1683.58 111.684 1684.09 111.528C1684.6 111.373 1685.04 111.065 1685.37 110.647C1685.7 110.23 1685.89 109.721 1685.92 109.191L1691.96 4.77625C1692 4.28695 1691.9 3.79733 1691.66 3.36468C1691.43 2.93203 1691.08 2.57426 1690.66 2.33321C1690.23 2.09216 1689.74 1.97781 1689.25 2.00355C1688.76 2.02928 1688.29 2.19403 1687.89 2.47852L1601.66 61.6622C1601.22 61.9632 1600.88 62.3909 1600.69 62.888C1600.51 63.3851 1600.48 63.9277 1600.6 64.443C1600.73 64.9584 1601.02 65.4217 1601.42 65.771C1601.82 66.1202 1602.32 66.3385 1602.85 66.3967L1647.08 71.2602C1648.48 71.4132 1649.83 71.8477 1651.05 72.5375C1652.28 73.2273 1653.35 74.1582 1654.21 75.2739L1681.26 110.622Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1690.65 2.35892L1651.06 72.5407" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
}