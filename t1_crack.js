function(context,args) { // help:true
	
	if(args.help){
		var ht=`\n
		   ______
	   (, /   )  /)      /)	 [Dagger]
		    /---(  /\/ _   _(/  _
	  ) / ____)(/_(_(_(_(__(/_ .T1-Crack 
	 (_/ (
====------------------------------------------------------->

Supply this cracker with a tier 1 target.

   Exempli Gratia: 
			   blade.t1_crack{target:#s.example.loc}
			   blade.t1_crack{target:#s.dtr.t1_lock_sim}
			   blade.t1_crack{target:#s.beta.lock_sim}

[*] For any issues please let me know @blade--~ on discord,
			   or send me a chats.tell{to:"blade" msg:""}.`
	return	ht	
	}

	var g={},r,l
	var s=true
	var t=true
	var f=false
    function c() {
            r=args.target.call(g);
            l=r.split('\n').pop();
    }
    function z(){
        if(l.includes('not')) {
           return true;
        } else {
            return false;
        }
    }
	var x='acct_nt CON_SPEC sn_w_glock l0ckbox magnara l0ckjaw usac l0g shfflr'
	var ez='open release unlock'
	var cw='red orange yellow lime green cyan blue purple'
	var k='72umy0 uphlaw vc2c7q 6hh8xw 76wnjz tvfkyq sa23uw xwz7ja cmppiq hc3b69 5c7e1r 4jitu5 vthf6e nfijix'
	var d={ '"did you know" is a communication pattern common to user ++++++':"fran_lee",
			"a ++++++ is a household cleaning device with a rudimentary networked sentience":"robovac",
	    	"according to trust, ++++++ is more than just following directives":"sentience",
	    	"communications issued by user ++++++ demonstrate structural patterns associated with humor":"sans_comedy",
	    	"in trust's vLAN, you became one of angie's ++++++":"angels",
			"in trust's vLAN, you became one of mallory's ++++++":"minions",
		  	"in trust's vLAN, you discovered that mallory and che are ++++++":"sisters",
		   	"in trust's vLAN, you encountered the will of ++++++, the prover":"petra",
		    "in trust's vLAN, you visited faythe's ++++++":"fountain",
			"in trust's vLAN, you were required to hack halperyon.++++++":"helpdesk",
			"pet, pest, plague and meme are accurate descriptors of the ++++++":"bunnybat",
			"safety depends on the use of scripts.++++++":"get_level",
			"service ++++++ provides atmospheric updates via the port epoch environment":"weathernet",
			"this fact checking process is a function of ++++++, the monitor":"eve",
			"trust's vLAN emphasized the importance of the transfer and capture of ++++++":"resource",
			"trust's vLAN presented a version of angie who had lost a friend called ++++++":"bo",
			"user 'on_th3_1ntern3ts' has ++++++ many things":"heard",
			"user ++++++ provides instruction via script":"teach",
			"user ++++++ uses the port epoch environment to request gc":"outta_juice",
			"users gather in channel CAFE to share ++++++":"poetry"}	
	c()
	for(;;) {
		x=x.split(' ')
		ez=ez.split(' ')
		cw=cw.split(' ')
		k=k.split(' ')
		if(l.includes('LOCK_UNLOCKED')){
			s=f
			return{ok:true}
		}
		while(s==t){
			for(var i=0;i<x.length;++i){
				if(l.includes(x[i])){
					s=f
					return{ok:false,msg:"[!] HIGH TIER LOCK ENCOUNTERED: "+x[i]+"/n"+g}
				}
			}
			//T1
			if(l.includes('21')){
				for(var i=0;i<ez.length;++i){
					g.ez_21=ez[i]
					c()
					if(!z()) break
				}
			}
			if(l.includes('35')){
				for(var i=0;i<ez.length;++i){
					g.ez_35=ez[i]
					c()
					if(l.includes('digit')){
						for(var i=0;i<10;++i){
							g.digit=i
							c()
							if(!z()) break
						}
					}
					if(!z()) break
				}
			}
			if(l.includes('40')){
				for(var i=0;i<ez.length;++i){
					g.ez_40=ez[i]
					c()
					if(l.includes('ez_prime')){
							for(var i=0;i<100;++i){
								g.ez_prime=i
								c()
								if(!z()) break
							}
					}
					if(!z()) break
				}
			}
			if(l.includes('c001')){
				for(var i=0;i<cw.length;++i){
					g.c001=cw[i]
					c()
					if(l.includes('color_digit')){
						for(var i=0;i<10;++i){
							g.color_digit=i
							c()
							if(!z()) break
						}
					}
					if(!z()) break
				}
			}
			if(l.includes('c002')){
				for(var i=0;i<cw.length;++i){
					g.c002=cw[i]
					c()
					if(l.includes('c002_complement')){
						for(var i=0;i<cw.length;++i){
							g.c002_complement=cw[i]
							c()
							if(!z()) break
						}
					}
					if(!z()) break
				}
			}
			if(l.includes('c003')){
				for(var i=0;i<cw.length;++i){
					g.c003=cw[i]
					c()
					if(l.includes('c003_triad_1')){
						for(var i=0;i<cw.length;++i){
							g.c003_triad_1=cw[i]
							c()
							if(l.includes('c003_triad_2')){
								for(var i=0;i<cw.length;++i){
									g.c003_triad_2=cw[i]
									c()
									if(!z()) break
								}
							}
							if(!z()) break
						}
					}
					if(!z()) break
				}
			}
			if(l.includes('l0cket')){
				for(var i=0;i<k.length;++i){
					g.l0cket=k[i]
					c()
					if(!z()) break
				}
			}
			if(l.includes('DATA_CHECK')){
				g.DATA_CHECK=''
				c()
				var q=r.split("\n")
				
				for(var i=0;i<q.length;++i){
					if(q[i] in d){
						g.DATA_CHECK += d[q[i]]
					}
				}
				c()
			}
			if(l.includes('Connection terminated.')){
				s=f
				return{ok:true,msg:'Connection terminated.'+'\n\n[+] Any donations would be appreciated. :)'}
			}
		}
		return g
	}
}
