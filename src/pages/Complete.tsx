import { useEffect, useState } from "react";
import { Navbar, Footer, Header, Card } from "../components";
import { Wrapper, Content } from "../layouts";
import { MainDataInterface } from "../interfaces";
import { getQuery } from "../utils";

const Complete = () => {
   const [data, setData] = useState<MainDataInterface | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const page = getQuery("page");
   useEffect(() => {
      (async () => {
         setIsLoading(true);
         try {
            const data = await fetch(
               `${import.meta.env.VITE_BASE_URL}/complete?page=${
                  page ? page : 1
               }`
            ).then((res) => res.json());
            setData(data);
            setIsLoading(false);
         } catch (error) {
            setIsLoading(false);
         }
      })();
      document.title = "Wajik Streaming | Complete";
   }, [page]);
   return (
      <Wrapper>
         <Navbar />
         <Content>
            <Header route="✔ Complete" message="terbaru" />
            <Card data={data} isLoading={isLoading} />
         </Content>
         <Footer />
      </Wrapper>
   );
};

export default Complete;