import { Vector } from './vector';

fdescribe('Vector', () => {
    it('should work', () => {
        const v1 = new Vector();
        v1.x = 1;
        v1.y = 0;
        expect(v1.magnitude).toBe(1);

        //v1.rotate(90)
        //expect(v1.x).toBe(0);
        //expect(v1.y).toBe(1);
    });
})