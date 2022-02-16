export class Vector {
    x: number;
    y: number;

    get magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    // TODO: rotate(angle)
    rotate(deg: number): Vector {
        // Step 1: Convect angle in degree to radian, ie rad = f(deg)
        //const rad = f(deg);
        // Fact: 360 degree = 2pi
        //        deg         rad 

        // Step 2: Use the rotation formula to calculate new coordinates
        // const x2 = Math.cos(rad)

        // Step 3: Create vector w/ new coordinates and return it
        const v = new Vector();
        //v.x = x2;
        return v;
    }
}

// Usage: See spec