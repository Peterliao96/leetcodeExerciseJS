/*
Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

If a certain key is empty, it should be excluded from the output (see e in the example below).

input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }

Important: when you concatenate keys, make sure to add the dot character between them. For instance concatenating Key2, c and d the result key would be Key2.c.d.


*/

function flattenDictionary(dict){
  flatDictionary = {}
  flattenDictionaryHelper('',dict,flatDictionary)
}

function flattenDictionaryHelper(initialkey,dict,flatDictionary){
  for (key in dict){
    val = dict[key]
    if(!typeof(val) == 'object'){
      if(initialkey == null || initialkey == ''){
        flatDictionary[key] = val
      } else {
        flatDictionary[initialkey + '.' + key] = val
      }
    } else{
      if(initialkey == null || initialkey == ''){
        flattenDictionaryHelper(key,val,flatDictionary)
      } else {
        flattenDictionaryHelper(initialkey + '.' + key, value, flatDictionary)
      }
    }
  }
}
