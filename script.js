const search1 = document.getElementById('search1');
const btn = document.getElementById('btn');
const gifbox = document.getElementById('gifcollection');


const api_key = 'wCwbhhySOgotOnWvuTGrESXq1TXLoZOV'
const api_url = 'https://api.giphy.com/v1/gifs/search'

async function gif1(name){
    const data1 = await fetch(`${api_url}?q=${name} &api_key=${api_key}&limit=45 `);
    const d = await data1.json()
    d.data.forEach((d1)=>{

        const img = document.createElement('img');
        img.src=d1.images.original.url;
        gifbox.appendChild(img);

    });
}

btn.addEventListener('click',async()=>{
    if(search1.value.trim() !==''){

        gifbox.innerHTML='';
        await gif1(search1.value);
        search1.value = '';
    }
    else{
        gifbox.innerHTML = '';
    }

});
search1.addEventListener('keyup',async (e)=>{
    if(e.key==='Enter')
    {
        e.preventDefault();
        if(search1.value.trim() !==''){

            gifbox.innerHTML='';
            await gif1(search1.value);
            search1.value = '';
        }
        else{
            gifbox.innerHTML = '';
        }

    }

});