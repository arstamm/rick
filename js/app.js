// File

// Video
const video = document.getElementById("video");

// Selected Elements
const startButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset");
const addButton = document.getElementById("add");

// Lanes
const aLane = document.getElementById("a");
const sLane = document.getElementById("s");
const wLane = document.getElementById("w");
const dLane = document.getElementById("d");

// const vidLog = document.getElementById("vid-log");

const leftLane = document.getElementById("left");
const downLane = document.getElementById("down");
const upLane = document.getElementById("up");
const rightLane = document.getElementById("right");

//Points
const aswdPoints = document.getElementById("aswd-points");
const mousePoints = document.getElementById("mouse-points");
const arrowPoints = document.getElementById("arrow-points");

// Target Positions
const START_POSITION = 750;
const BEGIN_VALID_POSITION = 25;
const PERFECT_VALID_POSITION = 7;
const END_VALID_POSITION = -20;
const EXIT_POSITION = -70;

// Delay
const DELAY = 2;
const VID_SLICE = .01;
const MOVE_PX = ((START_POSITION - PERFECT_VALID_POSITION) / DELAY ) * VID_SLICE;

//Time Dictionary

let levelArr = {
    9.917382:["right", true], 10.864674:["right", true], 12.017656:["right", true], 13.041201:["right", true], 14.130083:["right", true], 15.139982:["right", true], 16.228712:["right", true], 17.283003:["right", true], 18.352333:["left", true], 19.399724:["left", true], 20.454482:["left", true], 21.538696:["left", true], 22.594444:["right", true], 23.588311:["left", true], 24.667362:["right", true], 25.757497:["left", true], 26.79384:["up", true], 27.759686:["down", true], 28.87672:["up", true], 29.998394:["down", true], 31.038349:["up", true], 32.018993:["down", true], 33.129156:["up", true], 34.157854:["down", true], 35.226968:["up", true], 35.737394:["down", true], 36.314954:["right", true], 37.369162:["left", true], 38.432945:["left", true], 39.439789:["right", true], 39.917313:["up", true], 40.54042:["down", true], 41.558351:["left", true], 42.391971:["left", true], 43.121236:["right", true], 43.660602:["up", true], 44.092618:["down", true], 44.570047:["left", true], 45.774204:["right", true], 46.197697:["up", true], 46.538061:["left", true], 47.863466:["right", true], 48.411044:["down", true], 48.677123:["left", true], 49.771896:["right", true], 50.061752:["down", true], 50.5607:["left", true], 52.148215:["right", true], 52.48067:["up", true], 52.849397:["left", true], 54.261045:["right", true], 54.755094:["down", true], 55.012437:["left", true], 56.333086:["right", true], 56.899909:["up", true], 57.178797:["left", true], 57.766008:["right", true], 58.364578:["right", true], 58.574732:["down", true], 58.998889:["left", true], 60.753127:["right", true], 61.17474:["right", true], 61.63903:["right", true], 62.153427:["right", true], 62.671023:["left", true], 63.224875:["left", true], 63.790854:["left", true], 64.31921:["left", true], 64.867071:["up", true], 65.340846:["down", true], 65.845873:["up", true], 66.353651:["down", true], 66.934671:["right", true], 67.474155:["left", true], 67.975849:["right", true], 68.49916:["left", true], 69.034625:["right", true], 69.542355:["left", true], 70.072209:["right", true], 70.53872:["left", true], 71.117489:["up", true], 71.615154:["down", true], 72.201376:["up", true], 72.721823:["down", true], 73.277117:["right", true], 73.777679:["left", true], 74.266142:["right", true], 74.78464:["left", true], 75.371042:["right", true], 75.825326:["up", true], 76.301731:["down", true], 76.916579:["left", true], 77.488954:["right", true], 77.968031:["up", true], 78.543534:["down", true], 78.998797:["left", true], 79.556234:["down", true], 80.03015:["left", true], 80.553112:["down", true], 81.109634:["up", true], 81.739281:["right", true], 82.201937:["up", true], 82.7544:["down", true], 83.228861:["left", true], 83.762646:["down", true], 85.948955:["right", true], 86.314317:["down", true], 86.641328:["left", true], 88.030334:["right", true], 88.37228:["up", true], 88.729451:["left", true], 90.121341:["right", true], 90.647711:["down", true], 90.944444:["left", true], 91.203891:["down", true], 91.515183:["right", true], 92.247142:["right", true], 92.714875:["left", true], 94.384923:["up", true], 94.731134:["down", true], 95.046793:["left", true], 96.46293:["up", true], 97.010273:["right", true], 97.299069:["left", true], 97.557294:["down", true], 97.836477:["right", true], 98.597866:["right", true], 99.118144:["up", true], 99.402469:["down", true], 99.655156:["left", true], 99.971684:["right", true], 100.583685:["right", true], 100.796666:["down", true], 101.213775:["left", true], 102.855672:["right", true], 103.22004:["up", true], 103.542803:["down", true], 104.370099:["right", true], 104.616761:["up", true], 104.885099:["down", true], 105.367937:["left", true], 105.698441:["right", true], 106.502435:["right", true], 107.02864:["up", true], 107.583117:["down", true], 107.834179:["left", true], 108.361836:["right", true], 108.880085:["right", true], 109.163447:["down", true], 109.652145:["left", true], 110.644691:["right", true], 111.001106:["up", true], 111.247268:["down", true], 111.671541:["up", true], 112.008489:["left", true], 112.824928:["right", true], 113.359806:["left", true], 113.893718:["up", true], 114.177186:["down", true], 115.062435:["up", true], 115.268687:["down", true], 115.510907:["right", true], 116.001453:["left", true], 116.319863:["right", true], 116.550068:["left", true], 116.812724:["down", true], 117.393771:["up", true], 117.642246:["down", true], 118.120997:["right", true], 119.752501:["right", true], 120.066033:["left", true], 120.367626:["right", true], 120.590176:["left", true], 120.868842:["right", true], 121.073688:["left", true], 121.367459:["right", true], 121.641341:["left", true], 121.902073:["right", true], 122.124922:["left", true], 122.438186:["right", true], 122.659261:["left", true], 122.932269:["right", true], 123.213671:["left", true], 123.506303:["right", true], 123.69797:["left", true], 124.008738:["right", true], 124.214468:["left", true], 124.527271:["right", true], 124.773065:["left", true], 125.039141:["right", true], 125.257981:["left", true], 125.537821:["right", true], 125.780109:["left", true], 126.102222:["down", true], 126.105313:["up", true], 126.453335:["down", true], 126.823078:["up", true], 128.179552:["right", true], 128.458199:["left", true], 128.743166:["right", true], 129.005721:["left", true], 129.28602:["right", true], 129.52524:["left", true], 129.781253:["right", true], 130.041378:["left", true], 130.30776:["up", true], 130.325758:["down", true], 130.658711:["down", true], 131.017579:["up", true], 132.414869:["right", true], 132.695233:["left", true], 133.038263:["right", true], 133.280773:["left", true], 133.542757:["right", true], 133.744077:["left", true], 133.999291:["right", true], 134.246215:["left", true], 134.506991:["up", true], 134.837369:["down", true], 135.240679:["up", true], 136.638623:["right", true], 136.976728:["left", true], 137.263244:["right", true], 137.499792:["left", true], 137.749426:["right", true], 137.936634:["left", true], 138.227356:["right", true], 138.458151:["left", true], 138.731461:["up", true], 138.985623:["down", true], 139.272756:["up", true], 139.553127:["down", true], 139.823243:["up", true], 140.07058:["down", true], 140.352581:["up", true], 140.584324:["down", true], 140.88475:["right", true], 141.141074:["left", true], 141.41433:["right", true], 141.662832:["left", true], 141.915493:["right", true], 142.17821:["left", true], 142.437732:["right", true], 142.730556:["left", true], 143.002598:["right", true], 143.2544:["up", true], 143.505754:["down", true], 143.767866:["left", true], 144.041299:["down", true], 144.279865:["up", true], 144.58427:["right", true], 144.829553:["up", true], 145.070091:["down", true], 145.371963:["left", true], 145.634619:["down", true], 145.854026:["up", true], 146.142441:["right", true], 146.436797:["up", true], 146.670804:["down", true], 146.946135:["left", true], 147.200774:["down", true], 147.43084:["up", true], 147.699893:["right", true], 147.967754:["up", true], 148.26546:["down", true], 148.534602:["left", true], 148.819303:["down", true], 149.0656:["up", true], 149.347564:["right", true], 149.576959:["up", true], 149.819775:["down", true], 150.09639:["left", true], 150.372431:["down", true], 150.618772:["up", true], 150.895929:["right", true], 151.137522:["up", true], 151.390322:["down", true], 151.626566:["left", true], 151.91007:["down", true], 152.151453:["up", true], 152.447845:["right", true], 152.686976:["up", true], 152.956936:["down", true], 153.218607:["left", true], 153.522679:["right", true], 153.784262:["up", true], 154.072972:["down", true], 154.335863:["left", true], 154.62092:["right", true], 154.865712:["up", true], 155.106031:["down", true], 155.372178:["left", true], 155.628114:["left", true], 155.853048:["down", true], 156.081119:["up", true], 156.382221:["right", true], 156.678483:["left", true], 156.916927:["down", true], 157.196484:["up", true], 157.492888:["right", true], 157.776298:["right", true], 158.031416:["up", true], 158.304316:["down", true], 158.551141:["left", true], 158.853512:["right", true], 159.109927:["up", true], 159.343601:["down", true], 159.610162:["left", true], 160.121767:["right", true], 160.375288:["down", true], 160.647161:["left", true], 160.92395:["left", true], 161.160142:["left", true], 161.478705:["left", true], 161.748289:["left", true], 162.019856:["right", true], 162.29939:["down", true], 162.555938:["left", true], 162.847284:["right", true], 163.09876:["down", true], 163.369678:["left", true], 163.646198:["right", true], 163.885797:["left", true], 164.128501:["right", true], 164.371401:["down", true], 164.626664:["left", true], 164.902448:["right", true], 165.17283:["down", true], 165.412439:["left", true], 165.690462:["right", true], 165.890875:["left", true], 166.195754:["right", true], 166.455675:["up", true], 166.749708:["left", true], 167.022116:["right", true], 167.298059:["up", true], 167.549988:["left", true], 167.841356:["right", true], 168.080677:["left", true], 168.3639:["up", true], 168.628244:["down", true], 168.897502:["up", true], 169.152206:["down", true], 169.382715:["up", true], 169.674298:["down", true], 169.89625:["up", true], 170.150007:["down", true], 170.450211:["right", true], 170.738755:["down", true], 170.963293:["left", true], 171.25663:["right", true], 171.502727:["down", true], 171.755456:["left", true], 172.056866:["right", true], 172.307781:["left", true], 172.569505:["right", true], 172.8473:["down", true], 173.097612:["left", true], 173.372158:["right", true], 173.611472:["down", true], 173.875367:["left", true], 174.168473:["right", true], 174.422331:["left", true], 174.682529:["right", true], 174.950955:["up", true], 175.198766:["left", true], 175.482199:["right", true], 175.729889:["up", true], 175.989327:["left", true], 176.285107:["right", true], 176.52671:["left", true], 176.778182:["up", true], 177.034299:["down", true], 177.301777:["up", true], 177.5631:["down", true], 177.81363:["up", true], 178.056652:["down", true], 178.305711:["up", true], 178.58213:["down", true], 178.897338:["right", true], 179.20242:["left", true], 179.412807:["right", true], 179.700562:["left", true], 179.964014:["right", true], 180.230737:["left", true], 180.511337:["right", true], 180.729152:["left", true], 180.986298:["up", true], 181.240917:["down", true], 181.498145:["up", true], 181.754247:["down", true], 181.99948:["up", true], 182.252746:["down", true], 182.507634:["up", true], 182.755115:["down", true], 183.063915:["right", true], 183.347141:["left", true], 183.623464:["right", true], 183.89251:["left", true], 184.186976:["right", true], 184.434024:["left", true], 184.719557:["right", true], 184.960642:["left", true], 185.221337:["up", true], 185.477722:["down", true], 185.758143:["up", true], 186.008711:["down", true], 186.278005:["up", true], 186.512169:["down", true], 186.747627:["up", true], 186.984854:["down", true], 187.317362:["right", true], 187.589248:["up", true], 187.858124:["left", true], 188.107088:["right", true], 188.376993:["up", true], 188.650474:["left", true], 188.941422:["right", true], 189.187648:["left", true], 189.455758:["right", true], 189.691314:["down", true], 189.929031:["left", true], 190.19878:["right", true], 190.434281:["down", true], 190.670072:["left", true], 190.963099:["right", true], 191.217995:["left", true], 191.481834:["up", true], 191.769004:["down", true], 192.050141:["up", true], 192.352286:["down", true], 192.613527:["up", true], 192.880248:["down", true], 193.152188:["up", true], 193.381596:["down", true], 193.659338:["right", true], 193.954433:["left", true], 194.212905:["right", true], 194.507654:["left", true], 194.730813:["right", true], 195.019645:["left", true], 195.281439:["right", true], 195.534139:["left", true], 195.805543:["right", true], 196.058314:["up", true], 196.319859:["left", true], 196.591255:["right", true], 196.8563:["up", true], 197.12216:["left", true], 197.385677:["right", true], 197.639309:["left", true], 197.898878:["right", true], 198.144798:["down", true], 198.41359:["left", true], 198.679325:["right", true], 198.947056:["left", true], 199.220711:["right", true], 199.462243:["left", true], 199.735734:["right", true], 200.003928:["down", true], 200.273587:["left", true], 200.542882:["right", true], 200.804579:["left", true], 201.083105:["right", true], 201.334938:["left", true], 201.61351:["right", true], 201.869299:["left", true], 202.18773:["right", true], 202.417666:["left", true], 202.711305:["right", true], 202.979331:["right", true], 203.290092:["right", true], 203.507687:["right", true], 203.779256:["right", true], 204.010892:["right", true], 204.248862:["right", true] 
}

let levelArr2 = {
    9.917382:["right", true], 10.864674:["right", true], 12.017656:["right", true], 13.041201:["right", true], 14.130083:["right", true], 15.139982:["right", true], 16.228712:["right", true], 17.283003:["right", true], 18.352333:["left", true], 19.399724:["left", true], 20.454482:["left", true], 21.538696:["left", true], 22.594444:["right", true], 23.588311:["left", true], 24.667362:["right", true], 25.757497:["left", true], 26.79384:["up", true], 27.759686:["down", true], 28.87672:["up", true], 29.998394:["down", true], 31.038349:["up", true], 32.018993:["down", true], 33.129156:["up", true], 34.157854:["down", true], 35.226968:["up", true], 35.737394:["down", true], 36.314954:["right", true], 37.369162:["left", true], 38.432945:["left", true], 39.439789:["right", true], 39.917313:["up", true], 40.54042:["down", true], 41.558351:["left", true], 42.391971:["left", true], 43.121236:["right", true], 43.660602:["up", true], 44.092618:["down", true], 44.570047:["left", true], 45.774204:["right", true], 46.197697:["up", true], 46.538061:["left", true], 47.863466:["right", true], 48.411044:["down", true], 48.677123:["left", true], 49.771896:["right", true], 50.061752:["down", true], 50.5607:["left", true], 52.148215:["right", true], 52.48067:["up", true], 52.849397:["left", true], 54.261045:["right", true], 54.755094:["down", true], 55.012437:["left", true], 56.333086:["right", true], 56.899909:["up", true], 57.178797:["left", true], 57.766008:["right", true], 58.364578:["right", true], 58.574732:["down", true], 58.998889:["left", true], 60.753127:["right", true], 61.17474:["right", true], 61.63903:["right", true], 62.153427:["right", true], 62.671023:["left", true], 63.224875:["left", true], 63.790854:["left", true], 64.31921:["left", true], 64.867071:["up", true], 65.340846:["down", true], 65.845873:["up", true], 66.353651:["down", true], 66.934671:["right", true], 67.474155:["left", true], 67.975849:["right", true], 68.49916:["left", true], 69.034625:["right", true], 69.542355:["left", true], 70.072209:["right", true], 70.53872:["left", true], 71.117489:["up", true], 71.615154:["down", true], 72.201376:["up", true], 72.721823:["down", true], 73.277117:["right", true], 73.777679:["left", true], 74.266142:["right", true], 74.78464:["left", true], 75.371042:["right", true], 75.825326:["up", true], 76.301731:["down", true], 76.916579:["left", true], 77.488954:["right", true], 77.968031:["up", true], 78.543534:["down", true], 78.998797:["left", true], 79.556234:["down", true], 80.03015:["left", true], 80.553112:["down", true], 81.109634:["up", true], 81.739281:["right", true], 82.201937:["up", true], 82.7544:["down", true], 83.228861:["left", true], 83.762646:["down", true], 85.948955:["right", true], 86.314317:["down", true], 86.641328:["left", true], 88.030334:["right", true], 88.37228:["up", true], 88.729451:["left", true], 90.121341:["right", true], 90.647711:["down", true], 90.944444:["left", true], 91.203891:["down", true], 91.515183:["right", true], 92.247142:["right", true], 92.714875:["left", true], 94.384923:["up", true], 94.731134:["down", true], 95.046793:["left", true], 96.46293:["up", true], 97.010273:["right", true], 97.299069:["left", true], 97.557294:["down", true], 97.836477:["right", true], 98.597866:["right", true], 99.118144:["up", true], 99.402469:["down", true], 99.655156:["left", true], 99.971684:["right", true], 100.583685:["right", true], 100.796666:["down", true], 101.213775:["left", true], 102.855672:["right", true], 103.22004:["up", true], 103.542803:["down", true], 104.370099:["right", true], 104.616761:["up", true], 104.885099:["down", true], 105.367937:["left", true], 105.698441:["right", true], 106.502435:["right", true], 107.02864:["up", true], 107.583117:["down", true], 107.834179:["left", true], 108.361836:["right", true], 108.880085:["right", true], 109.163447:["down", true], 109.652145:["left", true], 110.644691:["right", true], 111.001106:["up", true], 111.247268:["down", true], 111.671541:["up", true], 112.008489:["left", true], 112.824928:["right", true], 113.359806:["left", true], 113.893718:["up", true], 114.177186:["down", true], 115.062435:["up", true], 115.268687:["down", true], 115.510907:["right", true], 116.001453:["left", true], 116.319863:["right", true], 116.550068:["left", true], 116.812724:["down", true], 117.393771:["up", true], 117.642246:["down", true], 118.120997:["right", true], 119.752501:["right", true], 120.066033:["left", true], 120.367626:["right", true], 120.590176:["left", true], 120.868842:["right", true], 121.073688:["left", true], 121.367459:["right", true], 121.641341:["left", true], 121.902073:["right", true], 122.124922:["left", true], 122.438186:["right", true], 122.659261:["left", true], 122.932269:["right", true], 123.213671:["left", true], 123.506303:["right", true], 123.69797:["left", true], 124.008738:["right", true], 124.214468:["left", true], 124.527271:["right", true], 124.773065:["left", true], 125.039141:["right", true], 125.257981:["left", true], 125.537821:["right", true], 125.780109:["left", true], 126.102222:["down", true], 126.105313:["up", true], 126.453335:["down", true], 126.823078:["up", true], 128.179552:["right", true], 128.458199:["left", true], 128.743166:["right", true], 129.005721:["left", true], 129.28602:["right", true], 129.52524:["left", true], 129.781253:["right", true], 130.041378:["left", true], 130.30776:["up", true], 130.325758:["down", true], 130.658711:["down", true], 131.017579:["up", true], 132.414869:["right", true], 132.695233:["left", true], 133.038263:["right", true], 133.280773:["left", true], 133.542757:["right", true], 133.744077:["left", true], 133.999291:["right", true], 134.246215:["left", true], 134.506991:["up", true], 134.837369:["down", true], 135.240679:["up", true], 136.638623:["right", true], 136.976728:["left", true], 137.263244:["right", true], 137.499792:["left", true], 137.749426:["right", true], 137.936634:["left", true], 138.227356:["right", true], 138.458151:["left", true], 138.731461:["up", true], 138.985623:["down", true], 139.272756:["up", true], 139.553127:["down", true], 139.823243:["up", true], 140.07058:["down", true], 140.352581:["up", true], 140.584324:["down", true], 140.88475:["right", true], 141.141074:["left", true], 141.41433:["right", true], 141.662832:["left", true], 141.915493:["right", true], 142.17821:["left", true], 142.437732:["right", true], 142.730556:["left", true], 143.002598:["right", true], 143.2544:["up", true], 143.505754:["down", true], 143.767866:["left", true], 144.041299:["down", true], 144.279865:["up", true], 144.58427:["right", true], 144.829553:["up", true], 145.070091:["down", true], 145.371963:["left", true], 145.634619:["down", true], 145.854026:["up", true], 146.142441:["right", true], 146.436797:["up", true], 146.670804:["down", true], 146.946135:["left", true], 147.200774:["down", true], 147.43084:["up", true], 147.699893:["right", true], 147.967754:["up", true], 148.26546:["down", true], 148.534602:["left", true], 148.819303:["down", true], 149.0656:["up", true], 149.347564:["right", true], 149.576959:["up", true], 149.819775:["down", true], 150.09639:["left", true], 150.372431:["down", true], 150.618772:["up", true], 150.895929:["right", true], 151.137522:["up", true], 151.390322:["down", true], 151.626566:["left", true], 151.91007:["down", true], 152.151453:["up", true], 152.447845:["right", true], 152.686976:["up", true], 152.956936:["down", true], 153.218607:["left", true], 153.522679:["right", true], 153.784262:["up", true], 154.072972:["down", true], 154.335863:["left", true], 154.62092:["right", true], 154.865712:["up", true], 155.106031:["down", true], 155.372178:["left", true], 155.628114:["left", true], 155.853048:["down", true], 156.081119:["up", true], 156.382221:["right", true], 156.678483:["left", true], 156.916927:["down", true], 157.196484:["up", true], 157.492888:["right", true], 157.776298:["right", true], 158.031416:["up", true], 158.304316:["down", true], 158.551141:["left", true], 158.853512:["right", true], 159.109927:["up", true], 159.343601:["down", true], 159.610162:["left", true], 160.121767:["right", true], 160.375288:["down", true], 160.647161:["left", true], 160.92395:["left", true], 161.160142:["left", true], 161.478705:["left", true], 161.748289:["left", true], 162.019856:["right", true], 162.29939:["down", true], 162.555938:["left", true], 162.847284:["right", true], 163.09876:["down", true], 163.369678:["left", true], 163.646198:["right", true], 163.885797:["left", true], 164.128501:["right", true], 164.371401:["down", true], 164.626664:["left", true], 164.902448:["right", true], 165.17283:["down", true], 165.412439:["left", true], 165.690462:["right", true], 165.890875:["left", true], 166.195754:["right", true], 166.455675:["up", true], 166.749708:["left", true], 167.022116:["right", true], 167.298059:["up", true], 167.549988:["left", true], 167.841356:["right", true], 168.080677:["left", true], 168.3639:["up", true], 168.628244:["down", true], 168.897502:["up", true], 169.152206:["down", true], 169.382715:["up", true], 169.674298:["down", true], 169.89625:["up", true], 170.150007:["down", true], 170.450211:["right", true], 170.738755:["down", true], 170.963293:["left", true], 171.25663:["right", true], 171.502727:["down", true], 171.755456:["left", true], 172.056866:["right", true], 172.307781:["left", true], 172.569505:["right", true], 172.8473:["down", true], 173.097612:["left", true], 173.372158:["right", true], 173.611472:["down", true], 173.875367:["left", true], 174.168473:["right", true], 174.422331:["left", true], 174.682529:["right", true], 174.950955:["up", true], 175.198766:["left", true], 175.482199:["right", true], 175.729889:["up", true], 175.989327:["left", true], 176.285107:["right", true], 176.52671:["left", true], 176.778182:["up", true], 177.034299:["down", true], 177.301777:["up", true], 177.5631:["down", true], 177.81363:["up", true], 178.056652:["down", true], 178.305711:["up", true], 178.58213:["down", true], 178.897338:["right", true], 179.20242:["left", true], 179.412807:["right", true], 179.700562:["left", true], 179.964014:["right", true], 180.230737:["left", true], 180.511337:["right", true], 180.729152:["left", true], 180.986298:["up", true], 181.240917:["down", true], 181.498145:["up", true], 181.754247:["down", true], 181.99948:["up", true], 182.252746:["down", true], 182.507634:["up", true], 182.755115:["down", true], 183.063915:["right", true], 183.347141:["left", true], 183.623464:["right", true], 183.89251:["left", true], 184.186976:["right", true], 184.434024:["left", true], 184.719557:["right", true], 184.960642:["left", true], 185.221337:["up", true], 185.477722:["down", true], 185.758143:["up", true], 186.008711:["down", true], 186.278005:["up", true], 186.512169:["down", true], 186.747627:["up", true], 186.984854:["down", true], 187.317362:["right", true], 187.589248:["up", true], 187.858124:["left", true], 188.107088:["right", true], 188.376993:["up", true], 188.650474:["left", true], 188.941422:["right", true], 189.187648:["left", true], 189.455758:["right", true], 189.691314:["down", true], 189.929031:["left", true], 190.19878:["right", true], 190.434281:["down", true], 190.670072:["left", true], 190.963099:["right", true], 191.217995:["left", true], 191.481834:["up", true], 191.769004:["down", true], 192.050141:["up", true], 192.352286:["down", true], 192.613527:["up", true], 192.880248:["down", true], 193.152188:["up", true], 193.381596:["down", true], 193.659338:["right", true], 193.954433:["left", true], 194.212905:["right", true], 194.507654:["left", true], 194.730813:["right", true], 195.019645:["left", true], 195.281439:["right", true], 195.534139:["left", true], 195.805543:["right", true], 196.058314:["up", true], 196.319859:["left", true], 196.591255:["right", true], 196.8563:["up", true], 197.12216:["left", true], 197.385677:["right", true], 197.639309:["left", true], 197.898878:["right", true], 198.144798:["down", true], 198.41359:["left", true], 198.679325:["right", true], 198.947056:["left", true], 199.220711:["right", true], 199.462243:["left", true], 199.735734:["right", true], 200.003928:["down", true], 200.273587:["left", true], 200.542882:["right", true], 200.804579:["left", true], 201.083105:["right", true], 201.334938:["left", true], 201.61351:["right", true], 201.869299:["left", true], 202.18773:["right", true], 202.417666:["left", true], 202.711305:["right", true], 202.979331:["right", true], 203.290092:["right", true], 203.507687:["right", true], 203.779256:["right", true], 204.010892:["right", true], 204.248862:["right", true] 
}

// Target and Lanes Values

const allLanes = [aLane, sLane, wLane, dLane, leftLane, downLane, upLane, rightLane];

let aswdTargets = {
    "left": [],
    "down": [],
    "up": [],
    "right": []   
};

const aswdLanes = {
    "left": aLane,
    "down": sLane,
    "up": wLane,
    "right": dLane   
}

let arrowTargets = {
    "left": [],
    "down": [],
    "up": [],
    "right": []   
};

const arrowLanes = {
    "left": leftLane,
    "down": downLane,
    "up": upLane,
    "right": rightLane  
}

// Functions


const createNewTarget = (playerLanes, playerTargets, direction, playerPoints) => {
    let newTarget = document.createElement("div");
    newTarget.classList.add("target");
    newTarget.style.top = `${START_POSITION}px`;
    playerLanes[direction].appendChild(newTarget);
    playerTargets[direction].push(newTarget);
    let position = START_POSITION;

    let interval = setInterval(() => {
        position -= MOVE_PX;
        let before = true;
        if (position < EXIT_POSITION) {
            if (before) {
                let oldPlayerScore = parseInt(playerPoints.textContent);
                playerPoints.textContent = `${oldPlayerScore - 5}`;
                let oldMouseScore = parseInt(mousePoints.textContent);
                mousePoints.textContent = `${oldMouseScore + 10}`;
                before = false;
            }
            if (newTarget.parentNode) {
                playerLanes[direction].removeChild(newTarget);
            }
            playerTargets[direction].filter(t => t !== newTarget);
            clearInterval(interval);
            return;
        }
        newTarget.style.top = `${Math.trunc(position)}px`;
    }, VID_SLICE * 1000);
}

const createLevelListener = (playerLanes, playerTargets, level, playerPoints) => {
    video.addEventListener("timeupdate", () => {
        Object.keys(level).forEach(time => {
            if (video.currentTime >= parseFloat(time) - DELAY && level[time][1]) {
                createNewTarget(playerLanes, playerTargets, level[time][0], playerPoints);
                level[time][1] = false;
            }
        });
    });
};

const createMouseLaneListener = (playerLanes, playerTargets, playerPoints) => {
    Object.keys(playerLanes).forEach(direction => {
        playerLanes[direction].addEventListener("click", () => {
            createNewTarget(playerLanes, playerTargets, direction, playerPoints)
        });
    });

}

const processKey = (key, targets, playerPoints) => {
    console.log(key);
    targets = targets.filter(t => {
        let pos = parseInt(t.style.top);
        console.log(`A pos: ${pos}`);
        let before = true;
        if (pos > END_VALID_POSITION && pos < BEGIN_VALID_POSITION) {
            if (before) {
                let oldPlayerScore = parseInt(playerPoints.textContent);
                playerPoints.textContent = `${oldPlayerScore + 20}`;
                let oldMouseScore = parseInt(mousePoints.textContent);
                mousePoints.textContent = `${oldMouseScore - 15}`;
                before = false;
            }
            console.log("HIT!!!!!!");
            
            if (t.parentNode) {
               t.remove(); 
            }
            return false;
        }
        return true;
    });
}

// Add Event Listeners

document.addEventListener('keydown', function(event) {
    
    if (event.key === 'a') {
        processKey("a", aswdTargets["left"], aswdPoints);
    } 
    if (event.key === 's') {
        processKey("s", aswdTargets["down"], aswdPoints);
    }
    if (event.key === 'w') {
        processKey("w", aswdTargets["up"], aswdPoints);
    } 
    if (event.key === 'd') {
        processKey("d", aswdTargets["right"], aswdPoints);
    } 
    if (event.key === 'ArrowLeft') {
        processKey("ArrowLeft", arrowTargets["left"], arrowPoints);
    } 
    if (event.key === 'ArrowDown') {
        processKey("ArrowDown", arrowTargets["down"], arrowPoints);
    } 
    if (event.key === 'ArrowUp') {
        processKey("ArrowUp", arrowTargets["up"], arrowPoints);
    } 
    if (event.key === 'ArrowRight') {
        processKey("ArrowRight", arrowTargets["right"], arrowPoints);
    }
});

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'a') {
//         console.log('a');
//         vidLog.textContent += `${video.currentTime}:["left", true], `;
//     } 
//     if (event.key === 's') {
//         console.log('s');
//         vidLog.textContent += `${video.currentTime}:["down", true], `;
//     }
//     if (event.key === 'w') {
//         console.log('w');
//         vidLog.textContent += `${video.currentTime}:["up", true], `;
//     } 
//     if (event.key === 'd') {
//         console.log('d');
//         vidLog.textContent += `${video.currentTime}:["right", true], `;
//     } 
//     if (event.key === 'ArrowLeft') {
//         console.log('ArrowLeft');
//         vidLog.textContent += `${video.currentTime}:["left", true], `;
//     } 
//     if (event.key === 'ArrowDown') {
//         console.log('ArrowDown');
//         vidLog.textContent += `${video.currentTime}:["down", true], `;
//     } 
//     if (event.key === 'ArrowUp') {
//         console.log('ArrowUp');
//         vidLog.textContent += `${video.currentTime}:["up", true], `;
//     } 
//     if (event.key === 'ArrowRight') {
//         console.log('ArrowRight');
//         vidLog.textContent += `${video.currentTime}:["right", true], `;
//     }
// });

startButton.addEventListener("click", () => {
    createMouseLaneListener(aswdLanes, aswdTargets, aswdPoints);
    createMouseLaneListener(arrowLanes, arrowTargets, arrowPoints);
    createLevelListener(aswdLanes,  aswdTargets, levelArr, aswdPoints);
    createLevelListener(arrowLanes, arrowTargets, levelArr2, arrowPoints);
    console.log("Game Started!!!");
    video.play();

});

resetButton.addEventListener("click", () => {
    console.log("Game Reset!!!");
    video.pause();
    video.currentTime = 0;
    Object.keys(levelArr).forEach(time => {
        levelArr[time][1] = true;
    });
    Object.keys(levelArr2).forEach(time => {
        levelArr[time][1] = true;
    });
});

addButton.addEventListener("click", () => {
    let time = video.currentTime;
    console.log(`Time Stamp: ${time}`);
    vidLog.textContent += `${time}`;
});

