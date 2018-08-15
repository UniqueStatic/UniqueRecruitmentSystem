export default function strMapToObj<T>(strMap: Map<string, T>) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        // We don’t escape the key '__proto__'
        // which can cause problems on older engines
        obj[k] = v;
    }
    return obj;
}