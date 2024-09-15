interface ITabAndContentLayoutProps {
    topComponent: React.ReactNode;
    bottomComponent: React.ReactNode;
    subTitle: string;
}

export default function TabAndContentLayout({
    topComponent,
    bottomComponent,
    subTitle,
}: ITabAndContentLayoutProps) {
    return (
        <div>
            <section>{topComponent}</section>
            <section className="border-t-4 border-gray200 px-4 pt-5">
                <h3 className="mb-5 text-title3">{subTitle}</h3>
                {bottomComponent}
            </section>
        </div>
    );
}
