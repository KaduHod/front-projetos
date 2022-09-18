const areas:object | any = {
    'Front-end':["javascript",'css','html','vue'],
    'Back-end':["node","express.js","web-socket", "python", "flask", 'php','laravel'],
    'Server':['heroku', 'vercel']
}

export const getAreaName = (tecName:string):object=> {
    tecName = tecName.toLowerCase();
    const keys = Object.keys(areas) 
    const area:string | undefined = keys.find( (key:string) => areas[key].includes(tecName));
    if(area) return {area, error:false}
    return {area, error:true}
}