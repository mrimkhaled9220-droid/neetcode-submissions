class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
      unordered_map<int , int > seen;
    
        vector<int> twoSum; 
         for (int   j =0   ;  j  < nums.size() ; j++ )
         {
              seen[nums[j]] = j  ; 


         }
         for (int i =0 ; i < nums.size(); i++ )
         {
            int diffrence = target - nums[i]; 
           if( seen.count(diffrence) > 0 && i != seen[diffrence] )
           {
               twoSum.push_back(i) ; 

                 twoSum.push_back(seen[diffrence]) ; 
                  return twoSum ; 

             
           } 

         }
     

    }
};
