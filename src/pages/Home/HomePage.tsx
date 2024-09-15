import HomeContent from '@/components/Home/HomeContent';
import RankingContent from '@/pages/Home/RankingContent';
import SaleContent from '@/pages/Home/SaleContent';
import { TopHeader } from '@/components/common';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HomePage() {
    const homeTabs = [
        { value: 'home', name: '홈' },
        { value: 'sale', name: '세일' },
        { value: 'ranking', name: '랭킹' },
    ];
    return (
        <>
            <TopHeader>
                <TopHeader.Title logo />
                <TopHeader.Util cart />
            </TopHeader>
            <Tabs defaultValue="home" className="">
                <TabsList className="flex justify-start bg-white">
                    {homeTabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="text-body2 data-[state=active]:text-body2_b data-[state=active]:shadow-none"
                        >
                            {tab.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="home" className="mt-0">
                    <HomeContent />
                </TabsContent>
                <TabsContent value="sale">
                    <SaleContent />
                </TabsContent>
                <TabsContent value="ranking">
                    <RankingContent />
                </TabsContent>
            </Tabs>
        </>
    );
}
