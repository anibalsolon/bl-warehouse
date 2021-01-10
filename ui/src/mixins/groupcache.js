
import Vue from 'vue'

import cache from '@/mixins/cache'

export default {
    mixins: [ cache ], 
    methods: {
        groupcache(id, cb) {
            this._cache("auth.group."+id, ()=>{
                let where = JSON.stringify({id});
                return this.$http.get(Vue.config.auth_api+'/groups?find='+where);
            }, (err, res)=>{
                if(err) return cb(err);
                cb(null, res.data[0]);
            });
        },  
    }
}


