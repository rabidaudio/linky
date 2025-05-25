
export const generateId = () => (BigInt(new Date().getTime())*1_000_000n)+BigInt(Math.round(Math.random()*1_000_000)) 

export const assignIds = (arry) => arry.map(v => ({ ...v, id: generateId() }))
