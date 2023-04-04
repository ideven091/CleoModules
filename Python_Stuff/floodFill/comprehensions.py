def subtract_lists(l1,l2):
    assert len(l1)==len(l2)
    #for i in range(len(l1)):
    #    l1[i]=l1[i]-l2[i]
    out = []
    for e1,e2 in zip(l1,l2):
        out.append(e1-e2)
    return out




if __name__ == '__main__':
    x = [100,200,300,400]
    y = [9,8,7,300]
    z = [(e1-e2) for e1,e2 in zip(x,y)]
    print(z)
    x = [e for e in x if e not in y]
    print(x)
    x.append(500)



    a= (zip(x,y,[1,2]))
    print(subtract_lists(x, y))
