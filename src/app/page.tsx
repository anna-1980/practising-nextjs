 

export default async function Home() {
  const request = await fetch("http://localhost:3000/api/search");
  const data = await request.json();
  return(
    <main>

    </main>
  )
}
