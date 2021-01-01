import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
		themes:{
			light:{
				primary:'#FF5252',
				secondary:'#E0E0E0'
			}
		}
	}
});
