export default async function Docs({params}: {params: Promise<{slug: string[]}>}) {
    const {slug} = await params
    console.log(slug)
    if(slug?.length === 1){
        return <h1>Feature {slug[0]}</h1>
    } else if(slug?.length === 2){
        return <h1>Feature {slug[0]} & Concept {slug[1]}</h1>
    } else if(slug?.length === 3){
        return <h1>Feature {slug[0]} & Concept {slug[1]} with Example {slug[2]}</h1>
    } else{
        return <h1>Page not Found</h1>
    }
};
