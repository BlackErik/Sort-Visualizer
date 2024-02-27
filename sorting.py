import random

def BubbleSort( A ):
    changes = True;
    while changes == True:
        changes = False;
        for i in range( 0, len( A ) - 1 ):
            if A[ i ] > A[ i + 1 ]:
                A[ i ], A[ i + 1 ] = A[ i + 1 ], A[ i ]
                changes = True
    return A

def ShakerSort( A ):
    changes = True;
    while changes == True:
        changes = False;
        for i in range( 0, len( A ) - 1 ):
            if A[ i ] > A[ i + 1 ]:
                A[ i ], A[ i + 1 ] = A[ i + 1 ], A[ i ]
                changes = True
        for i in range(len(A) - 2, 0, -1):
            if A[i] > A[i+1]:
                A[i], A[i+1] = A[i+1], A[i]
                changes = True
    return A

def CountingSort( A ):
    B = [0] * len(A)
    for i in A:
        B[i]+=1
    k = 0
    for i in range(len(B)):
        v = i
        count = B[i]
        for j in range(count):
            A[k] = v
            k +=1
    return A

def MergeSort( A ):
    if len( A ) <= 1:
        return
    L = A[ 0:len(A)//2 ]
    R = A[ len(A)//2:len(A) ]
    MergeSort( L )
    MergeSort( R )
    i = j = k = 0
    while i < len( L ) and j < len( R ):
        if L[ i ] <= R[ j ]:
            A[ k ] = L[ i ]
            k+=1
            i+=1
        else: 
            A[ k ] = R[ j ]
            k+=1 
            j+=1
    while i < len( L ):
        A[ k ] = L[ i ]
        k+=1
        i+=1 
    while j < len( R ):
        A[ k ] = R[ j ]
        k+=1
        j+=1

def QuickSort( A, low, high ):
    if high - low <= 0:
        return
    lmgt = low + 1
    for i in range ( low + 1, high + 1 ):
        if A[ i ] < A[ low ]:
            A[ i ], A[ lmgt ] = A[ lmgt ], A[ i ]
            lmgt+=1
    PivotIndex = lmgt - 1
    A[ low ], A[ PivotIndex ] = A[ PivotIndex ], A[ low ]
    QuickSort( A, low, PivotIndex - 1 )
    QuickSort( A, PivotIndex +1, high )

def ModifiedQuickSort( A, low, high ):
    if high - low <= 0:
        return

    mid = ( low + high ) // 2
    A[ low ], A[ mid ] = A[ mid ], A[ low ]
    lmgt = low + 1
    for i in range ( low + 1, high + 1 ):
        if A[ i ] < A[ low ]:
            A[ i ], A[ lmgt ] = A[ lmgt ], A[ i ]
            lmgt+=1
    PivotIndex = lmgt - 1
    A[ low ], A[ PivotIndex ] = A[ PivotIndex ], A[ low ]
    QuickSort( A, low, PivotIndex - 1 )
    QuickSort( A, PivotIndex +1, high )

def CreateRandomList( size ):
    A = []
    for i in range(size):
        r = random.randrange(0,size)
        A.append(r)
    return A

# function to reduce identical code
def testSort( func ):
    print(func.__name__)
    A = CreateRandomList(10)
    print("Random List: ",  A)
    B = A[0:len(A)]
    B.sort()
    func(A)
    print("Python Sorted List: ", B)
    print(func.__name__, "Sorted List: ", A)
    if A != B:
        print(func.__name__, " Sort Failed")
    print("")


def main():
    testSort( BubbleSort )

    testSort( ShakerSort )

    testSort( CountingSort )

    testSort( MergeSort )

    print("QuickSort")
    A = CreateRandomList(10)
    print("Random List: ",  A)
    B = A[0:len(A)]
    B.sort()
    QuickSort( A, 0, len( A ) - 1)
    print("Python Sorted List: ", B)
    print("QuickSort Sorted List: ", A)
    if A != B:
        print("QuickSort Sort Failed")
    print("")

    print("ModifiedQuickSort")
    A = CreateRandomList(10)
    print("Random List: ",  A)
    B = A[0:len(A)]
    B.sort()
    ModifiedQuickSort( A, 0, len( A ) - 1)
    print("Python Sorted List: ", B)
    print("ModifiedQuickSort Sorted List: ", A)
    if A != B:
        print("ModifiedQuickSort Sort Failed")
    print("")

    return

main()
    