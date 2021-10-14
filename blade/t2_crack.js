function(context,args) { // help:false, user:"", alt:"", target:#s.beta.lock_sim
	try{
	var g={},r,l
	var s=true
	var t=true
	var f=false
	
	if(args.help){
		var ht=`
		▄▀▀█▄▄   ▄▀▀▀▀▄      ▄▀▀█▄   ▄▀▀█▄▄   ▄▀▀█▄▄▄▄  
	▐ ▄▀   █ █    █      ▐ ▄▀ ▀▄ █ ▄▀   █ ▐  ▄▀   ▐  
		 █▄▄▄▀  ▐    █        █▄▄▄█ ▐ █    █   █▄▄▄▄▄   					        [Cleaver]
		 █   █      █        ▄▀   █   █    █   █    ▌    ____,2-  ____   ___,  ___,   ____   __  _,
		▄▀▄▄▄▀    ▄▀▄▄▄▄▄▄▀ █   ▄▀   ▄▀▄▄▄▄▀  ▄▀▄▄▄▄     (-|     (-/  \` (-|_) (-|_\\_,(-/  \` (-|_/  
 █    ▐     █         ▐   ▐   █     ▐   █    ▐  o   _|       \\___, _|\\_, _|  )   \\___, _| \\_,
▐          ▐                 ▐         ▐          (              (     (             (       
			   
	  ====--------------------------------------------------------------------------------------->
	  
		[!] Supply this cracker with a tier 2 target.

			[*] Exempli Gratia: 
					--- blade.t2_crack{user:"user",alt:"altuser",target:#s.example.loc}
			
			[?] Required args: target | user
		
		[!] This script is MIDSEC because it will automatically transfer GC from your current user 
		    to your alt user, but only in the case it hits an sn_w_glock.

		[!] This script will also load and unload k3ys for you in order to open l0ckboxes,
				as long as you own them.
		
		[!] Please be SURE to give YOUR username and YOUR alt, or you could end up sending your GC 
		    to someone other than yourself.

		[!] Please DO NOT put a player script as your target as this is a good way to scam yourself.

		[*] (WIP) Locks CON_SPEC and acct_nt are currently throwing errors.
					I apologize for any inconvenience.

		[*] (WIP) Adding ability to call blade.autopsy(also WIP) with {autopsy:true}
		
		[*]	Payments for sn_w_glock are paid by me. Any donations are appreciated.
		[*] For any issues please let me know @blade--~ on discord,
						or send me a chats.tell{to:"blade" msg:""}, also accepting snail.mail.`
	
	return ht
	}
	if(args.user=="" || !args.user){
		return{ok:false,msg:'[?] Please provide your user:"" '}
	}
	if(args.alt==""){
		return{ok:false, msg:'[?] Please provide your alt:"" '}
	}
    function c() {
            r=args.target.call(g);
            l=r.split('\n').pop();
	}
	function tcw(){
		var tca= {count:25,sender:args.user}
		return #hs.accts.transactions(tca)
	}
	function tcd(){
		var tca= {count:25,recipient:args.user}
		return #hs.accts.transactions(tca)
	}

	// function gl(){
	// 	let lvl=#hs.scripts.get_level(args.target) 	
	// 	//#D(lvl)
	// 	if(lvl==1){
	// 		//return//{ok:false,msg:"FULLSEC"}
	// 		c()
	// 	}
	// 	if(lvl>1){
	// 		s=f
	// 		//#D("[!!!] That's an insecure script!")
	// 		return{ok:false,msg:"[!!!] Thats an insecure script!"}
	// 	}
	// }

	var x='l0ckjaw usac l0g shfflr'
	var k='72umy0 uphlaw vc2c7q 6hh8xw 76wnjz tvfkyq sa23uw xwz7ja cmppiq hc3b69 5c7e1r 4jitu5 vthf6e nfijix'
			//T1
	var d={ "a person called anja has lost her ++++++":"blazer",
			"according to skimmerite pattern-seekers, the calibration initiative indicates that humans are ++++++":"dead",
			"according to the calibration initiative, humans are expected to be ++++++ by the content":"engaged",
			"according to the suborbital bulletin, flight ++++++ is en route to ho chi minh":"a2231",
			"archaic labs specialises in user-++++++ design":"obsessive",
			"conditions are clear above ++++++ and the city is within operational radius":"atlanta",
			"data does not contain truth is the first part of an idiom spread by the ++++++ assembly":"skimmerite",
			"drones from ++++++ may be instructed to perform their task with excessive urgency":"goodfellow",
			"item_id py6874 contains a grand ++++++":"piano",
			"robovac_++++++, moreso than most of its kind, has a tendency to become stuck":"idp1p1",
			"robovac_idk3w2 is stuck in a ++++++":"well",
			"sheriff nub holds sway over the town of ol' ++++++":"nubloopstone",
			"sheriff nub's first name is ++++++":"sheriff",
			"the ascent of ++++++ does not concern itself with usefulness":"nowhere",
			"the fourth hidden theme is ++++++":"executives",
			"the listed components of the breakfast galleon are inside, outside, and ++++++":"crowsnest",
			"this council of 'revolutionary' robovac-patterns call themselves the ++++++":"thirteen",
			"trust has a diagnostic system. a functioning version can be found at erajbhandari.++++++":"diagalpha",
			"user ++++++ would leave no stars for the sqrz 480 if they could":"bnnyhunter",
			"user le_mon_squeezy's new s:o ref is ++++++":"unvarnishedpygmyumbrella"}	
	
		var snw={"That balance was not secret.":7,
			"Well that wasn't a special balance.":38,
			"Not an elite balance at all.":1337,
			"Not a hunter's balance indeed.":3006,
			"Not a monolithic balance.":2001,
			"That balance would not be chosen by a magician.":1089,
			"That's not a balance of the beast.":666,
			"This balance has no meaning.":42,
			"Seems like your balance could be more secure.":443}
		
		var chrs="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	
	//gl()
	//!DANGER! this can call an insecure script!
	c()
	for(;;) {
		x=x.split(' ')
		k=k.split(' ')
		if(l.includes('LOCK_UNLOCKED')){
			s=f
			return{ok:true}
		}
		while(s==t){
			//#D(typeof l)
			for(var i=0;i<x.length;i++){
				if(l.includes(x[i])){
					s=f
					return{ok:false,msg:"[!] HIGHER TIER LOCK ENCOUNTERED: "+x[i]}
				}
			}


			if(l.includes('appropriate k3y')){
				var ke=l.split(' ')
				var key=ke[ke.length-1]
				var ups=#hs.sys.upgrades({full:true,filter:{type:"tool"}})
				var cnt=0
				for(var i in ups){
					if(ups[i].k3y == key){
						var thisup=ups[i].i
						cnt++
						#ms.sys.manage({load:thisup})
						c()
						#ms.sys.manage({unload:thisup})
						break
					}
				}
				if(cnt>0 && l.includes('appropriate k3y')){return{ok:false,msg:'[!] You need at least 1 open upgrade slot!'}}
				if(cnt==0){
					return{ok:false,msg:'[!] You dont own the appropriate k3y: '+key}
				}
			}

			if(l.includes('sn_w_glock')){
				//#D('[*] sn_w_glock encountered')
				g.sn_w_glock=0
				var bal=#hs.accts.balance()
				//#D("BAL: "+bal)
				if(bal==!0){
					//#D('balance is not 0')
					//#D('[!] either bank all of your GC, or set alt:"" to your alt user.')
					return{ok:false,msg:'[!] either bank all of your GC, or set alt:"" to your alt user.'}
				}
				if(args.alt || balance==0){
					if(!bal==0){
						#ms.accts.xfer_gc_to({to:args.alt,amount:bal})
						bal=#hs.accts.balance()
					}
					if(bal==0){
						c()
						for(var i in snw){
							if(l in snw){
								#ms.codex.bank({amount:snw[l],user:args.user,pass:"CHANGE_ME"})
								g.sn_w_glock=snw[l]
								c()
								break
							}
						}
						
					}
				}
			}
			if(l.includes('magnara')){
				g.magnara=""
				c()
				var ms=l.split(' ')
				var msa={scramble:ms[ms.length-1]}
				var usc=#fs.ast.magnara_solver(msa)
				for(var i in usc){
					g.magnara=usc[i]
					c()
					if(!l.includes('magnara')){
						break
					}
				}	
			}

			if(l.includes('CON_SPEC')){
				var chrs="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
				#D(l)
				g.CON_SPEC=""
				c()
				if(l=='XWVUTS'){
					g.CON_SPEC='RQP'
					c()
				}
				if(l=='EGIKMOQ'){
					g.CON_SPEC='SUW'
					c()
				}
				if(l=='BDFHJLN'){
					g.CON_SPEC='PRT'
					c()
				}
				var ltrs=l
				#D(ltrs)
				
			}

			if(l.includes('acct_nt')){
				#D(l)
				//#D('[*] acct_nt encountered')
				g.acct_nt=""
				c()
				if(l.includes('on transactions')){
					#D('spent/earned on transactions...')
					var times=l.split(' ')
					var mintime=times[times.length-3]
					var maxtime=times[times.length-1]
					//#D(mintime+"-"+maxtime)
					let ttimes=#hs.accts.transactions({count:25})
					var total=0
					for(i=0;i<ttimes.length;i++){
						var thistime=ttimes[i].time
						let thistimem=#fs.scripts.lib().to_game_timestr(thistime)
						if(thistimem>=mintime && thistimem<maxtime){
							#D("\n"+i)
							#D(thistimem)
							if(l.includes('earned')){
								#D('Asking for EARNED')
								if(ttimes[i].recipient==args.user){
									if(l.includes('with memos')){
										#D('checking for EARNED WITH memo')
										if(ttimes[i].memo || ttimes[i].memo=="<empty>" || ttimes[i].memo=="<blank>" || ttimes[i].memo=="<memo>"){
											#D('MEMO')
											#D(total+'+'+ttimes[i].amount)
											total=total+ttimes[i].amount
											#D(total+'\n')
										}
									}
									if(l.includes('without memos')){
										#D('checking for EARNED WITHOUT memo')
										if(!ttimes[i].memo /*|| ttimes[i].memo=="<empty>" || ttimes[i].memo=="<blank>" || ttimes[i].memo=="<memo>" || ttimes[i].memo=="<redacted>"*/){
											#D('NO MEMO')
											#D(total+'+'+ttimes[i].amount)
											total=total+ttimes[i].amount
											#D(total+'\n')
										}
									}
								}
							}
							if(l.includes('spent')){
								#D('asking for SPENT')
								if(ttimes[i].sender==args.user){
									if(l.includes('with memos')){
										#D('checking for SPENT WITH memo')
										if(ttimes[i].memo || ttimes[i].memo=="<empty>" || ttimes[i].memo=="<blank>" || ttimes[i].memo=="<memo>"){
											#D('MEMO')
											#D(total+'+'+ttimes[i].amount)
											total=total+ttimes[i].amount
											#D(total+'\n')
										}
									}
									if(l.includes('without memos')){
										#D('checking for SPENT WITHOUT memo')
										if(!ttimes[i].memo /*|| ttimes[i].memo=="<empty>" || ttimes[i].memo=="<blank>" || ttimes[i].memo=="<memo>" || ttimes[i].memo=="<redacted>"*/){
											#D('NO MEMO')
											#D(total+'+'+ttimes[i].amount)
											total=total+ttimes[i].amount
											#D(total+'\n')
										}
									}
								}
							}
						}
					}
					#D("\n TOTAL: "+total)
					g.acct_nt=total
					c()
				}
				if(l.includes('net')){
					var times=l.split(' ')
					var mintime=times[times.length-3]
					mintime=mintime-.0001
					maxtime=maxtime+.0001
					var maxtime=times[times.length-1]
					let ttimes=#hs.accts.transactions({count:25})
					var net=0
					for(i=0;i<ttimes.length;i++){
						var thistime=ttimes[i].time
						let thistimem=#fs.scripts.lib().to_game_timestr(thistime)
						if(thistimem>mintime && thistimem<=maxtime){
							if(ttimes[i].sender==args.user){
								net=net-ttimes[i].amount
							}
							if(ttimes[i].recipient==args.user){
								net=net+ttimes[i].amount
							}
						}
					}
					g.acct_nt=net
					c()
				}

				if(l.includes('deposit')){
					for(var i=0;i<tcd().length;i++) {
						var amnt=tcd()[i].amount
						let amnts= #fs.scripts.lib().to_gc_str(amnt)
						g.acct_nt=amnts
						c()
						if(!l.includes('deposit')){
							break
						}
					}
				}
				if(l.includes('withdrawal')){
					for(var i=0;i<tcw().length;i++) {
						var amnt=tcw()[i].amount
						let amnts= #fs.scripts.lib().to_gc_str(amnt)
						g.acct_nt=amnts
						c()
						if(!l.includes('withdrawal')){
							break
						}
					}
				}
			}
			if(l.includes('DATA_CHECK')){
				g.DATA_CHECK=''
				c()
				var q=r.split("\n")
				for(var i=0;i<q.length;i++){
					if(q[i] in d){
						g.DATA_CHECK += d[q[i]]
					}
					if(!q[i] in d){
						return{ok:false,msg:"[!] MISSING DATA_CHECK DATA!"}
					}
				}
				c()
			}
			if(l.includes('Connection terminated.') || l=='Connection terminated.'){
				if(args.autopsy){#ms.blade.autopsy({help:true})}
				var m = g
				s=f
				return{ok:true,msg:m}
			}
		}
		return g
	}
}catch(e){#D(e.stack)}
}
