export function mapModel(names) {
    return names.reduce((computed, name)=>{
        return {
            ...computed,
            [name]: {
                get () {
                  console.log(this.$store.values);
                  return this.$store.values[name];
                },
                set (value) {
                    this.$store.commit('setValues', { name, value });
                }
            }
        }
    }, {})
}
