/**
 * This file is part of Ark Cpp Client.
 *
 * (c) Ark Ecosystem <info@ark.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 **/
 
/**
 * This sketch covers how to use the Cpp-Client API.
 * It allows your ESP32 to send requests to an Ark Node
 */

 /**
 * NOTE: At the time of this writing, the Cpp-Client library requires running the 'ARDUINO_IDE.sh' bash script located in the 'extras' folder.
 * This converts our library to be compatible with the Arduino IDE.
 */

/****************************************/

/**
 * This is where you include the 'arkClient.h' header.
 * This allows your project to use Ark Cpp-Client.
 */
#include <arkClient.h>
/**/

/****************************************/

/**
 * This is where you include WiFi header for your board.
 * This example is for the ESP32, and includes the 'WiFi.h' header.
 */
#include <WiFi.h>
/**/

/****************************************/

/* This is the WiFi network you'd like your board to connect to. */
const char* ssid = "yourSSID";
const char* password = "yourWiFiPassword";
/**/

/****************************************/

/** 
 *  This is the IP address of an Ark Node
 *  Specifically, this is a Devnet V2 Node IP
 *  You can find more peers here: https://github.com/ArkEcosystem/peers
 *  
 *  The Public API port for the V2 Ark network is '4003'
 */
const char* peer = "167.114.29.55";
int port = 4003;
/**/

/****************************************/

/**
 * This is how you define a connection while speficying the API class as a 'template argument'
 * You instantiate a connection by passing a IP address as a 'c_string', and the port as an 'int'.
 */
Ark::Client::Connection<Ark::Client::Api> connection(peer, port);
/**/

/****************************************/

void checkAPI() {
  /**
   * This is how you can check the Version of the API
   * In this example, it should return '2' as an 'int' for V2 of Arks' API. 
   */
  auto apiVersion = connection.api.version();
    Serial.print("\nAPI Version: ");
    Serial.println(apiVersion);
  /**/

  /********************/

  /**
   * Here you can call a list of 'All' 'Blocks' on the network.
   * The '2' and '1' refer to the pagination (e.g. response limit and how many pages)
   *  
   * This is equivalant to calling '167.114.29.49:4003/api/v2/blocks?limit=2&page=1'
   * 
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this
   * 
   * {
   *  "meta": {
   *    "count": 2,
   *    "pageCount": 597291,
   *    "totalCount": 1194581,
   *    "next": "\/api\/v2\/blocks?limit=2&page=2",
   *    "previous": null,
   *    "self": "\/api\/v2\/blocks?limit=2&page=1",
   *    "first": "\/api\/v2\/blocks?limit=2&page=1",
   *    "last": "\/api\/v2\/blocks?limit=2&page=597291"
   *    },
   *  "data": [
   *    {
   *      "id": "9809002764916365223",
   *      "version": 0,
   *      "height": 1178071,
   *      "previous": "10476150126412446830",
   *      "forged": {
   *        "reward": 200000000,
   *        "fee": 0,
   *        "total": 200000000,
   *        "amount": 0
   *      },
   *      "payload": {
   *        "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
   *        "length": 0
   *      },
   *      "generator": {
   *        "username": "darkcrow",
   *        "address": "DFSUsSmcVUhVZYQ1nowciWmmtnj1kvZK5Z",
   *        "publicKey": "03a8ff0a3cbdcb3bfbdb84dbf83226f338ba1452047ac5b8228a1513f7f1de80de"
   *      },
   *      "signature": "304402207fd861e98aa5e4ea0c4a828ad9104bb636b429bc73dc0d5bfe3515347e8b1a79022051f8fb3b3752f1204e8c425d0528203942756811d669c7dd1ccb15ff7bc14e09",
   *      "transactions": 0,
   *      "timestamp": {
   *        "epoch": 57144626,
   *        "unix": 1547245826,
   *        "human": "2019-01-11T22:30:26.000Z"
   *       }
   *      },
   *    {
   *      "id": "10476150126412446830",
   *      "version": 0,
   *      "height": 1178070,
   *      "previous": "1656548224477584335",
   *      "forged": {
   *        "reward": 200000000,
   *        "fee": 0,
   *        "total": 200000000,
   *        "amount": 0
   *      },
   *      "payload": {
   *        "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
   *        "length": 0
   *      },
   *      "generator": {
   *        "username": "genesis_16",
   *        "address": "DHg1jYVS23D6GP7RuhckuJsYAr6crH6c3Z",
   *        "publicKey": "03c57b6a3eb7d01ade51f95c8ae4e8ebeb7ca7b8422ab0fb2a236de5d1a5bc6a1b"
   *      },
   *      "signature": "304402201e548ee45d835a7edda9cddbe26530563c1aceebbb25ebf89966eed8fec5d0e40220140aee033d42562b22c73f097249e9a59cef24a2a7e1c887c7a16691445c2987",
   *      "transactions": 0,
   *      "timestamp": {
   *        "epoch": 57144618,
   *        "unix": 1547245818,
   *        "human": "2019-01-11T22:30:18.000Z"
   *      }
   *    }
   *  ]
   * }
   * 
   */
  const auto blocksResponse = connection.api.blocks.all(2, 1);
    Serial.print("\nBlocks Response: ");
    Serial.println(blocksResponse.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * The following method can be used to search for a speficit Delegate.
   * In this case, 'boldninja'.
   * 
   * This is equivalant to calling '167.114.29.49:4003/api/v2/delegates/boldninja'
   * 
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   * 
   * {
   *  "data": {
   *    "username": "boldninja",
   *    "address": "DKrACQw7ytoU2gjppy3qKeE2dQhZjfXYqu",
   *    "publicKey": "023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f7359",
   *    "votes": 4970515580299,
   *    "rank": 27,
   *    "blocks": {
   *      "produced": 23867,
   *      "missed": 439,
   *      "last": {
   *        "id": "13492733628654518284",
   *        "height": 1178126,
   *        "timestamp": {
   *          "epoch": 57145090,
   *          "unix": 1547246290,
   *          "human": "2019-01-11T22:38:10.000Z"
   *        }
   *      }
   *    },
   *    "production": {
   *      "approval": 0.04,
   *      "productivity": 98.19
   *    },
   *    "forged": {
   *      "fees": 103507430299,
   *      "rewards": 4731200000000,
   *      "total": 4834707430299
   *    }
   *  }
   * }
   */
  const auto delegateResponse = connection.api.delegates.get("boldninja");
    Serial.print("\nDelegate Response: ");
    Serial.println(delegateResponse.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * The following method can be used to get the Status of a Node.
   * 
   * This is equivalant to calling '167.114.29.49:4003/api/v2/node/status'
   * 
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   * 
   * {
   *  "data": {
   *    "synced": true,
   *    "now": 1178395,
   *    "blocksCount": 0
   *   }
   * }
   */
  const auto nodeStatus = connection.api.node.status();
    Serial.print("\nNode Status: ");
    Serial.println(nodeStatus.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * The following method can be used to get a list of 'All' 'Peers' on the network.
   * 
   * The '2' and '1' refer to the pagination (e.g. response limit and how many pages)
   * 
   * This is equivalant to calling 'http://167.114.29.49:4003/api/v2/peers?limit=2&page=1'
   * 
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "meta": {
   *    "count": 2,
   *    "pageCount": 46,
   *    "totalCount": 91,
   *    "next": "\/api\/v2\/peers?limit=2&page=2",
   *    "previous": null,
   *    "self": "\/api\/v2\/peers?limit=2&page=1",
   *    "first": "\/api\/v2\/peers?limit=2&page=1",
   *    "last": "\/api\/v2\/peers?limit=2&page=46"
   *  },
   *  "data": [
   *    {
   *      "ip": "213.32.9.98",
   *      "port": 4002,
   *      "version": "2.1.0",
   *      "height": 1178420,
   *      "status": 200,
   *      "os": "linux",
   *      "latency": 15,
   *      "hashid": "1c254aa0"
   *    },
   *    {
   *      "ip": "137.74.237.196",
   *      "port": 4002,
   *      "version": "2.1.0",
   *      "height": 1178420,
   *      "status": 200,
   *      "os": "linux",
   *      "latency": 20,
   *      "hashid": "64e290cc"
   *    }
   *  ]
   * }
   */
  const auto allPeers = connection.api.peers.all(2, 1);
    Serial.print("\nAll Peers: ");
    Serial.println(allPeers.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * The following method can be used to get a list of 'Transaction' 'Types'.
   * 
   * This is equivalant to calling 'http://167.114.29.49:4003/api/v2/transactions/types'
   * 
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "data": {
   *    "Transfer": 0,
   *    "SecondSignature": 1,
   *    "DelegateRegistration": 2,
   *    "Vote": 3,
   *    "MultiSignature": 4,
   *    "Ipfs": 5,
   *    "TimelockTransfer": 6,
   *    "MultiPayment": 7,
   *    "DelegateResignation": 8
   *  }
   * }
   */
  const auto transactionTypes = connection.api.transactions.types();
    Serial.print("\nTransaction Types: ");
    Serial.println(transactionTypes.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * This method can be used to get a list of 'Vote' Transactions.
   * The '2' and '1' refer to the pagination (e.g. response limit and how many pages)
   * 
   * This is equivalant to calling 'http://167.114.29.49:4003/api/v2/votes?limit=2&page=1'
   * 
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "meta": {
   *    "count": 2,
   *    "pageCount": 6962,
   *    "totalCount": 13924,
   *     "next": "\/api\/v2\/votes?limit=2&page=2",
   *     "previous": null,
   *     "self": "\/api\/v2\/votes?limit=2&page=1",
   *     "first": "\/api\/v2\/votes?limit=2&page=1",
   *     "last": "\/api\/v2\/votes?limit=2&page=6962"
   *  },
   *  "data": [
   *    {
   *      "id": "315481aa6f8023beb5e0e89ab2b35f11e2fda3f3f34003e6ff563517fe497e0b",
   *      "blockId": "8426118737032066166",
   *      "version": 1,
   *      "type": 3,
   *      "amount": 0,
   *      "fee": 80494853,
   *      "sender": "DQjc6E6WAH7PNtPUNALjZmkyk5yU34RTkU",
   *      "recipient": "DQjc6E6WAH7PNtPUNALjZmkyk5yU34RTkU",
   *      "signature": "30450221009095883cb1e4ddab2724a9c7473ca12fd40f390765776e1258375859beb05f12022023d845fd9ce1e424a54adf056e3915ca2a2e9c55a6ea6713639e3da781263df5",
   *      "asset": {
   *        "votes": [
   *          "+033cce8deb934704f07c994f2f5cfe54d59e061aad8e2f7fc982e4fe978d312a43"
   *        ]
   *      },
   *      "confirmations": 11466,
   *      "timestamp": {
   *        "epoch": 57049890,
   *        "unix": 1547151090,
   *        "human": "2019-01-10T20:11:30.000Z"
   *      }
   *    },
   *    {
   *      "id": "8484b6de30fe2cc51e7c1844dfae436ba56de3280182e87ff37f1aab7a2d3aa3",
   *      "blockId": "4417493337461919261",
   *      "version": 1,
   *      "type": 3,
   *      "amount": 0,
   *      "fee": 80494853,
   *      "sender": "DQjc6E6WAH7PNtPUNALjZmkyk5yU34RTkU",
   *      "recipient": "DQjc6E6WAH7PNtPUNALjZmkyk5yU34RTkU",
   *      "signature": "30440220486bfed2fafdc4b56cd271cceff7849e952776ec10dcfa66ac172f21b9146f8302200751d94d938b0db033019c02ecf9a831fb228e025c5ecbd7a5b5ee8f8634fb1f",
   *      "asset": {
   *        "votes": [
   *          "-03f294777f7376e970b2bd4805b4a90c8449b5935d530bdb566d02800ac44a4c00"
   *        ]
   *      },
   *      "confirmations": 11480,
   *      "timestamp": {
   *        "epoch": 57049770,
   *        "unix": 1547150970,
   *        "human": "2019-01-10T20:09:30.000Z"
   *      }
   *    }
   *  ]
   * }
    */
  const auto allVotes = connection.api.votes.all(2, 1);
    Serial.print("\nAll Votes: ");
    Serial.println(allVotes.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * This method can be used to get a list of 'Top' 'Wallets' (Wallets with the most ARK).
   * The '2' and '1' refer to the pagination (e.g. response limit and how many pages)
   * 
   * This is equivalant to calling '167.114.29.49:4003/api/v2/wallets/top?limit=2&page=1'
   * 
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "meta": {
   *    "count": 2,
   *    "pageCount": 97775,
   *    "totalCount": 195549,
   *    "next": "\/api\/v2\/wallets\/top?limit=2&page=2",
   *    "previous": null,
   *    "self": "\/api\/v2\/wallets\/top?limit=2&page=1",
   *    "first": "\/api\/v2\/wallets\/top?limit=2&page=1",
   *    "last": "\/api\/v2\/wallets\/top?limit=2&page=97775"
   *  },
   *  "data": [
   *    {
   *      "address": "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
   *      "publicKey": "03d3fdad9c5b25bf8880e6b519eb3611a5c0b31adebc8455f0e096175b28321aff",
   *      "username": null,
   *      "secondPublicKey": null,
   *      "balance": 10181224932845318,
   *      "isDelegate": false
   *    },
   *    {
   *      "address": "DEyaFhDuaoQyKbFH4gJtYZvKkB6umyrEUj",
   *      "publicKey": "033c59dcdc36944cc28f68c1e4b47ac370fe326e53f9adf5f07764d3e8b74b1838",
   *      "username": "whalessio",
   *      "secondPublicKey": "03820f214bd49a09c636fa366b4b3c1a0dbd2953d14aac7e68a596e0636e662dfb",
   *      "balance": 2000035979999643,
   *      "isDelegate": true
   *    }
   *  ]
   * }
   */
   const auto topWallets = connection.api.wallets.top(2, 1);
    Serial.print("\nTop Wallets: ");
    Serial.println(topWallets.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/
};

/****************************************/

void setup()
{
  Serial.begin(115200); // Begin your Serial Connection. This allows you to monitor your boards output.

  WiFi.begin(ssid, password); // This starts your boards connection to WiFi.
  while (WiFi.status() != WL_CONNECTED) // This will delay your board from continuing until a WiFi connection is established.
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());

  checkAPI(); // Begin API Requests
};

/****************************************/

void loop() {}; // We can leave this empty, as we don't want to repeat anything in this example.
