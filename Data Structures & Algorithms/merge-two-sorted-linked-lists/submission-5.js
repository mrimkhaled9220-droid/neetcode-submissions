/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list 2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let l1 = list1 ; 
        let l2 = list2 ; 
        let current =null ; 
        let newlist = null ; 
        if (l1&&!l2)
            {
                return l1 ; 
            }
            else if (!l1&&l2)
            {
                return l2 ; 
            }
            else if (!l1&&!l2)
            {
                return l1; 
            }
         if (!newlist)
            {
                if (l1.val<=l2.val)
                {
                    newlist = l1 ; 
                    current = l1 ; 
                    l1 = l1.next ; 
                }else 
                {
                    newlist = l2 ; 
                    current = l2; 
                    l2= l2.next ; 

                }
            }
           
        while (l1&&l2)
        {
           
               if (l1.val<=l2.val)
               {

                  current.next = l1; 
                  current = l1 ; 
                  l1= l1.next; 

               }else 
               {
                  current.next = l2; 
                  current = l2 ; 
                  l2= l2.next; 

               }


        }
         if (l1)
         {
            current.next = l1;

         }
         else if (l2)
         {
            current.next =l2;
         }
         
     return newlist ; 

       


    }
}
