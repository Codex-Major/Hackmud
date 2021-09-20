function(context,args){// help:true
     var g={},r,l
     var list=[]
     if(args.help){
          var ht=`
          
      ____  __    ____   ___   ______
     / __ )/ /   /   |  / __\\ / ____/                   [Detector]
    / __  / /   / /| | / / / / __/      ____,  _,       ____,____,____,  ____,____,____, 
   / /_/ / /___/ ___ |/ /_/ / /___     (-|    /|       (-(__(-/  (-|__) (-/_|(-|__|-|_,  
  /_____/_____/_/  |_/_____/_____/   O  _|,   _|, ____, ____)_\\__,_|  \\,_/  |,_|   _|__, 
                                       (     (   (     (    (    (     (     (    (      
                                                 
[!] Supply this scraper with a T1 corp script.
     
     [*] Exempli Gratia:
          --- blade.t1_scrape{target:#s.halperyon.public}
          --- blade.t1_scrape{target:#s.goodfellow.public}
               
[!] Please DO NOT put a player script as your target as this is a good way to get scammed.
     
[*] (WIP) Adding ability to call blade.autopsy(also WIP) with {autopsy:true}
[*] For any issues, or missing info, please let me know @blade--~ on discord, 
     or send me a chats.tell{to:"blade" msg:""}, also accepting snail.mail.`
          
          
          return ht
     }
     function lc() {
          r=args.target.call(g);
          if(TypeError){
               if(typeof r !== 'string'){
                    return list+'\n'
               }
          }
          l=r.split('\n').pop();
          
     }
     function c() {
          r=args.target.call(g);
          l=r.split('\n').pop();
     }
	var a='nav navigation see action cmd command process open show entry get'
	var b='dir directory employees people personnel list -'
     
     var pr2='Ap_calypse '
     var u='lass_doug pugluv4vr '

     var pr='ls_rites Free_BFG userpanel e)(ecution0r qw_stop H0meEntert4inment LUNARLANDER_01.11.bat ragnaroxx.sh semordnilap.sh dsktp_mngr ESCHATOLOGI.EXE W3rlD3NDER giant_spidr mypassport cloudskimmer.da7a public_profiles judgeme_nt omegabyte_03.23_final_final my_login -'
     var pw='plantowin supercalifragilisticexpialidocious thenumberone bethebest knowyourteam endtheworld'
     a=a.split(' ')
     b=b.split(' ')
     pr=pr.split(' ')
     pw=pw.split(' ')

     c()
     for(;;) {
          var cc=0
          for(var i=0;i<b.length;++i){ 
               if(i==b.length && l.includes('|')){
                    return{ok:false, msg:"[!] Do not have the proper entry command"}
               }
               g.entry=b[i]
               g.nav=b[i]
               g.navigation=b[i]
               g.see=b[i]
               g.action=b[i]
               g.cmd=b[i]
               g.command=b[i]
               g.process=b[i]
               g.open=b[i]
               g.show=b[i]
               g.get=b[i]
               c()
               if(l.includes('No password specified.')){ 
                    //#D('\n[*] FOUND CMD: '+b[i])
                    for(var i=0;i<pw.length;++i){
                         g.p=pw[i]
                         g.pass=pw[i]
                         g.password=pw[i]
                         c()
                         if(i==pw.length && l.includes('No password specified.')){
                              return{ok:false,msg:"[!] Do not have required password"}
                         }
                         if(l.includes('project')){
                              //#D('\n[*] FOUND PASS: '+pw[i])
                              var cnt=0
                              var list=[]
                              for(var i=0;i<pr.length;++i){
                                   g.project=pr[i]
                                   lc()
                                   if(typeof r !== 'string'){
                                        cnt=++cnt
                                        //#D('\n[*] FOUND LOCS IN: '+pr[i])
                                        for(var z in r){
                                             //#D(r[z])
                                             list.push(r[z])
                                        }
                                   }
                                   if(cnt==0 && i==pr.length){
                                            return {ok:false,msg:"[!] Do not have required project."}
                                   }
                                   if(cnt > 0 && i==pr.length)return{ok:true,msg:"\n"+list} 
                              }
                         }
                         if(i==pr.length)break
                    }
                    return list     
               }
               if(i==b.length && l.includes('|')){#D('[!]')}
          }
          if(!cnt==0){return list}
          return {ok:false,msg:'[!] Something went wrong.\n[!] Send a chats.tell{to:"blade",msg:""} or at me @blade--~ on the hackmud discord.'}
     }
}
