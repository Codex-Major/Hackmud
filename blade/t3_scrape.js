function(context,args) { //t:0
	var g={},r,l
    

	if(args.t==0){
		let entry=#fs.zez.t3_view()
		#D('')
		for(var i in entry[0]){
			#D(entry[0][i])
		}
		#D('\nThanks to zez for zez.t3_view!')
		return{
			ok:true
		}
	}

	function c() {
		r=args.t.call(g);
		l=r.split('\n').pop();
    }

	var u='journer_of_truth lass_doug pugluv4vr foxy_guy shareef_j m_clarke_dunk duke_ell huey_n boris b3nd3r wiley_curry jak1ta_wagner rocky_b hand_solo sam_cart-'
	u=u.split(' ')
	var pcnt=0
	var ucnt=0
	c()

	for(;;){
		for(var i in u){
			g.username=u[i]
			g.pin="0"
			c()
			if(l.includes('pin') && l.includes('incorr')){
				ucnt++
				//#D('FOUND USER '+g.username)
				var db_ob=#db.f({type:"pin_brute",corp:args.t,username:g.username}).first() // query is an example
				if(!db_ob){
 					db_ob={_id:#db.ObjectId(),type:"pin_brute",corp:args.t,username:g.username,i:0}
  					#db.i(db_ob);// insert a new document containing db_ob
				}
				for(var x=db_ob.i;x<10000 && Date.now()-_START < 4500;x++) {
					g.pin=(x+'').padStart(4,0)
					g.perform="flow"
					c()
				
					if(!l.includes('pin') && !l.includes('incorr')) {
						pcnt++
						//g.perform="flow"
						#db.r({_id:db_ob._id});
						return{ok:true,msg:'USER: '+g.username+'\nPIN: '+g.pin+'\n'+r}
						//g.perform="flow"
						//c()
					}
				}
				/*update for next run*/
				#db.u1({_id:db_ob._id},{$set:{i:x+1}})
				return{ok:false,msg:'[*] Run me again! |'+g.username+'|'+g.pin}
			}
			if(i==u.length-1 && ucnt==0){
				return{ok:false,msg:"[!] Dont have the proper username"}
			}
		}
		return{ok:false,msg:'[!] Something went wrong.\n[!] Send a chats.tell{to:"blade",msg:""} or at me @blade--~ on the hackmud discord.'}
	}
}
